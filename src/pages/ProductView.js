import styled from "styled-components";
import Navbar from "../components/ShopSection/Navbar"
import Annoucement from "../components/ShopSection/Annoucement"
import Newsletter from "../components/ShopSection/Newsletter"
import Footer from "../components/ShopSection/Footer"
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../components/responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column"})}
`

const ImgContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh"})}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px"})}
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0px;
`

/*const Condition = styled.p`
`*/

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%"})}
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%"})}
`

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Quantity = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #117cf8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid #117cf8;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #117cf8;
      color: #fff;
  }
`

const ProductView = () => {
    return (
        <Container>
            <Navbar />
            <Annoucement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_51/3436914/w23202248_pebblegrey_2000_alt_9.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Winter Jacket</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet
                        ligula semper egestas interdum. Nullam scelerisque, eros sed scelerisque feugiat,
                        est sapien mattis risus, id suscipit dolor purus vel tortor. In hac habitasse platea
                        dictumst. Pellentesque gestas.
                    </Desc>
                    <Price>1500₽</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="gray" />
                            <FilterColor color="pink" />
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <QuantityContainer>
                            <Remove />
                            <Quantity>1</Quantity>
                            <Add />
                        </QuantityContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductView