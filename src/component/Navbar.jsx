import styled from "styled-components";
import { mobile } from "../responsive";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  ${mobile({ padding: "0" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 18px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  border: 0.5px solid lightgrey;
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
  ${mobile({ marginLeft: "5px" })}
`;

const Input = styled.input`
  border: none;
  font-size: 18px;
  &:focus {
    outline: none;
  }
  ${mobile({ width: "50px", fontSize: "12px" })}
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Logo = styled.img`
  height: 60px; 
  ${mobile({ width: "135px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  ${mobile({ justifyContent: "center", flex: 2 })}
`;

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ fontSize: '16px', color: "gray" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo src="assets/logo.jpg"></Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
