import React from 'react';
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined, Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";
import styled from "styled-components";

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

const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;


const Navbar = () => {
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
                    <Logo>REACT OLSTORE</Logo>
                </Center>
                <Right>
                  <SocialContainer>
                    <SocialIcon color="3B5999">
                      <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                      <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                      <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                      <Pinterest />
                    </SocialIcon>
                  </SocialContainer>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
