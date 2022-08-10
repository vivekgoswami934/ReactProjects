import faker from "faker";
import { useState } from "react";
import SingleProduct from "./SingleProduct";
import "./style.css"

faker.seed(100) ;

const Home = ({cart,setCart}) => {
  let data = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));

  
  const [prodData, setProdData] = useState(data);

  //console.log(prodData);
    
  
  console.log(cart)

  return (
    <div className="productContainer">
      {prodData.map((data) => (
       <SingleProduct key={data.id} data={data} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};

export default Home;
