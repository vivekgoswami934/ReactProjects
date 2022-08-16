import { useEffect, useState } from "react";
import Pages from "./Components/Pages";

function App() {
  const [data, setData] = useState([]);
  // console.log(data);

  const getData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await res.json();
    setData(data);
    // console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1  style={{width:"70%",margin:"auto" ,color:"white",textAlign:"center" , backgroundColor:"black"}}>Pagination Projects</h1>

      {data.length ? <Pages data={data} /> : <h1>Loading...</h1>}
    </>
  );
}

export default App;
