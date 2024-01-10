import { Link } from "react-router-dom";

const DonationCard = ({ card }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
  } = card || {};
  return (
    <Link to={`/user/${parseInt(id)}`}>
    <div
      style={{ background: `${card_bg_color}` }}
      className="flex mx-auto  flex-col rounded-xl  bg-clip-border shadow-md"
    >
      <div className="m-0 overflow-hidden rounded-none bg-transparent bg-clip-border shadow-none">
        <img src={picture} alt="ui/ux review check" />
      </div>
      <div className="p-6">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          <button
            className="px-3 py-1 m-4 rounded-md"
            style={{
              background: `${category_bg_color}`,
              color: `${text_button_bg_color}`,
            }}
          >
            {" "}
            {category}
          </button>
        </h4>
        <p
          style={{
            color: `${text_button_bg_color}`,
            padding: "10px",
            fontSize: "20px",
            fontWeight: 500,
          }}
          className="block font-sans"
        >
          {title}
        </p>
      </div>
    </div>
  </Link>
  );
};

export default DonationCard;
