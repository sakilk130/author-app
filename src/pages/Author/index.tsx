import { FC, useState } from "react";
import Card from "../../components/Card";
import {
  useFetchAuthor,
  useFetchFavoriteAuthor,
} from "../../hooks/useFetchAuthor";

const Author: FC = () => {
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const limit = 10;
  const { data, isError, error, isLoading, isFetching } = useFetchAuthor(
    limit,
    skip,
    page
  );

  const {
    data: favtAuthor,
    isError: favtIsError,
    isLoading: favtIsLoading,
    isFetching: favtIsFetching,
  } = useFetchFavoriteAuthor();

  const nextPageHandler = () => {
    setPage(page + 1);
    setSkip(skip + limit);
  };

  const prevPageHandler = () => {
    setPage(page - 1);
    setSkip(skip - limit);
  };

  if (isError || favtIsError) {
    return <div className="text-danger">Error: {error}</div>;
  }
  if (isLoading || isFetching || favtIsLoading || favtIsFetching) {
    return <div className="spinner-border m-5" role="status"></div>;
  }

  return (
    <div className="container">
      <div className="row p-2">
        {data.results.map((author: any) => (
          <div className="col p-3" key={author._id}>
            <Card
              id={author._id}
              name={author.name}
              bio={author.bio}
              link={author.link}
              isFavt={favtAuthor.some((favt: any) => favt.id === author._id)}
            />
          </div>
        ))}
      </div>

      <div className="d-flex align-items-center justify-content-center bg-light rounded-3 mx-3">
        <button
          className={`btn btn-primary m-2`}
          onClick={prevPageHandler}
          disabled={data.page === 1}
        >
          &laquo;
        </button>
        <p className="text-center m-2 fw-bolder">Page: {data.page}</p>
        <button
          className={`btn btn-primary m-2`}
          onClick={nextPageHandler}
          disabled={data.page === data.totalPages}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default Author;
