import Navbar from "../Navbar/Navbar";

const Banner = () => {
  return (
    <div>
      <div className="md:min-h-screen flex justify-center items-center absulate w-full bg-no-repeat bg-cover bg-[url('https://i.ibb.co/VqfjxnC/Whats-App-Image-2023-09-26-at-12-44-18-AM.jpg')]">
        <div className="relative">
          <div className="relative flex justify-center items-center">
            <h2 className="text-5xl font-bold text-black">
              I Grow By Helping People By Need
            </h2>
          </div>
          <div className="flex md:mt-7 justify-center items-center">
            <input
              className="rounded-s-md p-3 md:w-[470px] md:h-[50px]"
              placeholder="Search here.."
              type="text"
              name=""
              id=""
            />{" "}
            <button className="p-3 text-white md:w-[110px] rounded-e-md text-base bg-[#FF444A]">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
