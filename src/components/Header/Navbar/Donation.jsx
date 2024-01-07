import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDataLS } from "../../../LocalStoragedata";
import DonationList from "../../DonationDetails/donationList";


const Donation = () => {
  const data = useLoaderData();
  const [donateList, setDonateList] = useState([]);
  useEffect(() => {
    if (data.length > 0) {
      const donateData = getDataLS();
      const donateId = [];
      for (const id of donateData) {
        const list = data.find((ids) => ids.id === id);
        if (list) {
          donateId.push(list);
        }
      }
      console.log(donateId);
      setDonateList(donateId);
    }
  }, [data]);

  return (
    <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:h-[200px] gap-5">
      {
        donateList.map(cart => <DonationList key={cart.id} cart={cart}></DonationList>)
      }
    </div>
    
  );
};

export default Donation;
