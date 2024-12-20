import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const RatingBar = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // Full Star
      stars.push(<FaStar key={i} color="#ffc107" />);
    } else if (rating >= i - 0.5) {
      // Half Star
      stars.push(<FaStarHalfAlt key={i} color="#ffc107" />);
    } else {
      // Empty Star
      stars.push(<FaRegStar key={i} color="#ffc107" />);
    }
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <div className=" gap-2" style={{ display: "flex" }}>
        {stars}
      </div>
    </div>
  );
};

export default RatingBar;
