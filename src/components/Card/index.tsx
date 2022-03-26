import { FC, useState } from "react";
import {
  useAddFavoriteAuthor,
  useRemoveFavtAuthor,
} from "../../hooks/useFetchAuthor";
import "./style/index.css";

interface IAuthor {
  id: string;
  name: string;
  bio: string;
  link: string;
  isFavt: boolean;
}

const Card: FC<IAuthor> = ({ id, name, bio, link, isFavt }) => {
  const [showMore, setShowMore] = useState(false);
  const { mutate } = useAddFavoriteAuthor();
  const { mutate: removeFavtAuthor } = useRemoveFavtAuthor();

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="row">
        <div className="col-8">
          <div className="card-body">
            <a href={link} target="_blank">
              <h5 className="card-title">{name}</h5>
            </a>

            <p className="card-text">
              {showMore ? bio : `${bio.substring(0, 50)}...`}
              <span
                className=" btn text-primary d-inline"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "See less" : "See more"}
              </span>
            </p>
          </div>
        </div>
        <div className="col-4 text-end">
          <button
            className={`btn btn-sm ${
              isFavt ? "btn-outline-danger" : "btn-outline-primary"
            }`}
            onClick={
              isFavt
                ? () => removeFavtAuthor(id)
                : () =>
                    mutate({
                      id,
                      name,
                      bio,
                      link,
                    })
            }
          >
            {isFavt ? "Remove Favt" : "Add Favt"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
