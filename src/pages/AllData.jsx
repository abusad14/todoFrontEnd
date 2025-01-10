import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllData = () => {
  const [allData, setAllData] = useState([]);
  // !Backend link of vercel
  const vercelUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${vercelUrl}api`);
      setAllData(res.data.data);
      // console.log(res.data.data);
    };
    fetchData();
  }, [vercelUrl]);
  return (
    <div>
      <h1 className="text-3xl">This is show all data page </h1>
      {allData.length == 0 ? (
        <h1>No data</h1>
      ) : (
        allData.map((v, i) => {
          return (
            <div key={v._id}>
              <div className="flex gap-5 m-5 text-2xl border border-black p-3">
                <h1 className="font-semibold">{v.taskNumber}.</h1>
                <h1>{v.taskDetail}</h1>
                <Link
                  to={`/oneData/${v._id}`}
                  className="underline text-blue-700 hover:scale-105"
                >
                  See details.
                </Link>
              </div>
            </div>
          );
        })
      )}
      <Link to="/" className="m-5 underline text-blue-700 text-2xl">
        Home
      </Link>
    </div>
  );
};

export default AllData;
