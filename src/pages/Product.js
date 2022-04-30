import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from  "axios";
import { useEffect, useState } from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

export const Product = (Props) => {
    const id = window.location.pathname.split('/')[2];
    const [productData, setProductData] = useState([]);
    const [amount, setAmount] = useState(1);
    const handleAmount = () => {
      setAmount(amount+1);
    }
    const handleAmountDecrease = () => {
      setAmount(amount-1);
    }
    useEffect(() => {
      const getProduct = async () => {
        try {
          const product = await axios.get(`${process.env.REACT_APP_API_URL}/product/${id}`);
          setProductData(product.data);
        } catch (err) {
          console.log(err);
        }
      }
      getProduct();
    }, [])
    
    return (
      <Container>
        <Announcement />
        <Navbar Cart={Props.Cart} />
        <Wrapper>
          <ImgContainer>
            <Image src={productData?.image_url} />
          </ImgContainer>
          <InfoContainer>
            <Title>{productData?.title}</Title>
            <Desc>
              {productData?.description}
            </Desc>
            <Price>Rp. {parseInt(productData?.price).toLocaleString()}</Price>
            <AddContainer>
              <AmountContainer>
                {amount > 1 ? (
                  <Remove style={{ cursor: 'pointer' }} onClick={handleAmountDecrease} />
                ) : (
                  <Remove style={{ color: '#ccc' }} />
                )}
                  <Amount>{productData?.stock < 1 ? 0 : amount}</Amount>
                {amount < productData?.stock ? (
                  <Add style={{ cursor: 'pointer' }} onClick={handleAmount} />
                ) : (
                  <Add style={{ color: '#ccc' }} />
                )}
              </AmountContainer>
              {productData?.stock > 1 && (
                <Button
                  onClick={() => { 
                    Props.UpdatedCart(true);
                    localStorage.setItem("cart", JSON.stringify({
                      id: productData.id,
                      amount: amount
                    }));
                  }}
                >
                  ADD TO CART
                </Button>
              )}
              
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Footer />
      </Container>
    )
}

export default Product;

