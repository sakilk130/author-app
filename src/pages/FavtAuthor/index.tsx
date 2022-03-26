import { FC } from "react";
import Card from "../../components/Card";
import { useFetchFavoriteAuthor } from "../../hooks/useFetchAuthor";

const FavtAuthor: FC = () => {
  const { data, isError, error, isLoading, isFetching } =
    useFetchFavoriteAuthor();
  if (isError) {
    return <div className="text-danger">Error: {error}</div>;
  }
  if (isLoading || isFetching) {
    return <div className="spinner-border m-5" role="status"></div>;
  }
  return (
    <div className="container">
      <div className="row p-2">
        {data.length > 0 ? (
          data.map((author: any) => (
            <div className="col p-3" key={author.id}>
              <Card
                id={author.id}
                name={author.name}
                bio={author.bio}
                link={author.link}
                isFavt={true}
              />
            </div>
          ))
        ) : (
          <h4>No Favorite Author</h4>
        )}
      </div>
    </div>
  );
};

export default FavtAuthor;
