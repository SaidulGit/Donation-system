import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div>

        <nav className="flex p-8 mx-2.5 justify-between items-center">
            <img src="https://i.ibb.co/4KfysD2/Logo.png" alt="" />
            <ul className="flex gap-5">
                <li>
            
                <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending " : isActive ? "text-red-500 underline font-bold" : ""
  }
>
  Home
                </NavLink>


                </li>
                <li>
            
                <NavLink
  to="/statistics"
  className={({ isActive, isPending }) =>
    isPending ? "pending text-lg" : isActive ? "text-red-500 underline font-bold" : ""
  }
>
  Statistics
                </NavLink>


                </li>
                <li>
            
                <NavLink
  to="/donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending text-lg" : isActive ? "text-red-500 underline font-bold" : ""
  }
>
  Donation
                </NavLink>


                </li>
            </ul>
        </nav> 
    </div>
  )
}

export default Navbar