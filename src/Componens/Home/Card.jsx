import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Firebase/Context";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();
  const firebase = useContext(AuthContext);

  useEffect(() => {
  
    firebase.image(props.imageURL).then(url => setUrl(url));
  }, [firebase, props.imageURL]);

  return (
    <div className="h-[500px]">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-[450px] h-[250px]" src={url} alt="Book" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <span className="text-xl font-bold">Book Name: </span>{props.names}
          </h2>
          <p><span className="text-xl font-bold">Book Number: </span>{props.numbers}</p>
          <p><span className="text-xl font-bold">Book Price: </span>${props.prices}</p>
          <div className="card-actions justify-end">
            <button onClick={() => navigate(`/bok/${props.userId}`)} className="btn btn-primary">
              Book Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
