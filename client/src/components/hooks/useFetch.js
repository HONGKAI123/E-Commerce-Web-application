//custom hooks
import { useEffect, useState } from "react";
import { makeRequest } from "../../axios/makeRequest";

// we don't need to write fetch code in each component (ie. category, single producrs)
const useFetch = (url) => {
  // console.log("new request");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // setLoading(true);

        const response = await makeRequest.get(url); //get all prodcuts information
        setData(response.data.data);
      } catch (err) {
        setError(err);
        // console.log(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  //   console.log(data);
  return { data, error, loading }; //return all information in an object
};

export default useFetch;
// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           process.env.REACT_APP_API_URL +
//             `/products?populate=*&filters[type][$eq]=${type}`, //this becomes url in param
//?for search certerin data (查询参数)
//           {
//             headers: {
//               Authorization: "bearer " + process.env.REACT_APP_API_TOKEN, //send api token
//             },
//           }
//         );
//         setProducts(response.data.data);
//         // console.log(data)
//       } catch (err) {
//         // console.log(err);
//       }
//     };
//     fetchData();
//   }, []);
