import { useNavigate } from "react-router";
import "./EventListCard.css";
interface IEventListCardProps {
  eventName: string;
  eventImage: string;
}

const EventListCard: React.FC<IEventListCardProps> = ({
  eventName,
  eventImage,
}) => {
  const navigate = useNavigate();
  return (
    <div className="event-list-card">
      <h2>{eventName}</h2>
      <img src={eventImage} alt="" />
      <div
        className="know-more-btn"
        onClick={() => {
          navigate(`/event/${eventName}`);
        }}
      >
        <p>Know More </p>
        <i className="bi bi-arrow-right-circle-fill" />
      </div>
    </div>
  );
};

export default EventListCard;
