import React from 'react';
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined, ShoppingCart } from "@material-ui/icons";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 90px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 7px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CartItem = styled.div`
  position: absolute;
  color: white;
  padding: 2px;
  border-radius: 30%;
  background-color: red;
  opacity: 0.8;
`

const Navbar = (Props) => {
    const navigate = useNavigate();
    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/">
                      <Logo>REACT OLSTORE</Logo>
                    </Link>
                </Center>
                <Right>
                  {Props.Cart === true && (
                    <CartItem>1</CartItem>
                  )}
                  {Props.Cart === true ? (
                    <Link to={`/checkout`}>
                      <ShoppingCart
                        fontSize="large"
                        style={{ cursor: 'pointer' }}
                      />
                    </Link>
                  ) : (
                    <ShoppingCart fontSize="large"/>
                  )}
                  
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
