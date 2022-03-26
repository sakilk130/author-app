import { FC, useState } from "react";
import "./style/index.css";

interface IAuthor {
  id: string;
  name: string;
  bio: string;
  link: string;
}

const Card: FC<IAuthor> = ({ id, name, bio, link }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="row">
        <div className="col-8">
          <div className=" card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              {showMore ? bio : `${bio.substring(0, 50)}...`}
              <span
                className=" btn text-primary d-inline"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show less" : "Show more"}
              </span>
            </p>
          </div>
        </div>
        <div className="col-4 text-end">
          <button className="btn btn-outline-primary btn-sm">Add Favt</button>
          <button className="btn btn-outline-danger btn-sm">Remove Favt</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
