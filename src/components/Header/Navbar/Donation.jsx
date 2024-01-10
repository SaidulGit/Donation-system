import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDataLS } from "../../../LocalStoragedata";
import DonationList from "../../DonationDetails/donationList";

const Donation = () => {
  const data = useLoaderData();
  const [donateList, setDonateList] = useState([]);
  const donateId = [];
  useEffect(() => {
    if (data.length > 0) {
      const donateData = getDataLS();
      for (const id of donateData) {
        const list = data.find((ids) => ids.id === id);
        if (list) {
          donateId.push(list);
        }
      }
      setDonateList(donateId); 
    }
  }, [data]);

  return (
    <div>
      <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
        {donateList.map((cart) => (
          <DonationList key={cart.id} cart={cart}></DonationList>
        ))}
        <div className="w-[1320px] mx-auto text-center">
        <button id="showAll" class="btn w-[120px] btn-success">Show all </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
