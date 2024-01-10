import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const DonationList = ({ cart }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
    price,
  } = cart || {};
  return (
   <div>
     <div style={{background:`${card_bg_color}`}} className="rounded-lg">
      <Card className="w-full max-w-[48rem] flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={picture}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
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
          </Typography>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2 text-2xl font-semibold"
          >
            {title}
          </Typography>
          <Typography
            style={{ color: `${text_button_bg_color}` }}
            color="gray"
            className="mb-8 text-base font-semibold"
          >
            {price}
          </Typography>
         <Link to={`/user/${id}`}>
         <button
              style={{ background: `${text_button_bg_color}` }}
              className="text-base font-semibold rounded px-4 py-1 text-white"
            >
              view Details
            </button>
         </Link>
        </CardBody>
      </Card>
    </div>
        
   </div>
   
  );
};

export default DonationList;
