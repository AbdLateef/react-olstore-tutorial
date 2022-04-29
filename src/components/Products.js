import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from  "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
        setProductsData(products.data);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, [])

  return (
    <Container>
      {productsData.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;