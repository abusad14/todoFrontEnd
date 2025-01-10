import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState("");
  // !Backend link which is hosted on vercel
  const vercelUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${vercelUrl}`);
        console.log("RES:", res.data);
        setState(res.data);
      } catch (error) {
        console.log("Error in catch block", error);
      }
    };
    fetchData();
  }, [vercelUrl]);
  return (
    <div>
      <h1 className="bg-zinc-500 p-2 text-white text-3xl">HEading: {state}</h1>
      <Link to="/data" className="underline text-blue-700 m-5 text-2xl">
        See All Data
      </Link>
      {/* <Link to="/oneData" className="underline text-blue-700 m-5 text-2xl">
        See One Data
      </Link> */}
    </div>
  );
};

export default Home;
