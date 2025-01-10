import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OneData = () => {
  const [data, setData] = useState({});
  const param = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/singleData/${param.id}`
      );
      setData(res.data);
      // console.log(res.data);
    };
    fetchData();
  }, [param.id]);
  // console.log(param.id);
  return (
    <div>
      <h1 className="text-3xl">OneData</h1>
      {Object.keys(data).length === 0 ? (
        <h1 className="text-2xl ">Loading...</h1>
      ) : (
        <div className="flex gap-4 m-5">
          {" "}
          <h1 className="text-2xl font-semibold ">{data.taskNumber}.</h1>
          <h1 className="text-2xl ">{data.taskDetail}</h1>
        </div>
      )}
      <Link to="/" className="underline text-blue-700 text-2xl">
        Home
      </Link>
    </div>
  );
};

export default OneData;
