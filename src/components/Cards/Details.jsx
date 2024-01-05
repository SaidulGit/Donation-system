import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const user = useLoaderData();
  // const [users, setUsers] = useState([]);
  // const { id } = useParams();
  // const singleData = async () => {
  //   const data = await user.find((single) => {
  //     const valu = parseInt(single.id) === parseInt(id);
  //     return valu;
  //   });
  //    console.log(data);
  //   // setUsers(data);
  // };
  // singleData();

  return (
    <div>
     <div className="card bg-base-100 shadow-xl">
      <div className="relative">
      <img className="w-full md:h-[700px] rounded-lg " src={user.picture} alt="Shoes" />
      <h4 className="absolute bg-[#0B0B0B80] w-full h-[130px] right-0 bottom-0 items-center flex "><button style={{background:`${user.text_button_bg_color}`}} className=" rounded text-lg font-semibold text-[#FFF] m-8 px-5 py-3"> Donation {user.price} </button></h4>
     </div>
  <div className="card-body">
    <h2 className="card-title md:mt-7 text-4xl font-bold">
      {user.title}
    </h2>
    <p className="md:mt-4 text-lg font-normal">{user.description}</p>
  </div>
</div>
    </div>
  );
};

export default Details;
