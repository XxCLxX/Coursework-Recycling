import { useLocation } from "react-router";
import { useState } from "react";
import styled from 'styled-components'
import Navbar from "../components/ShopSection/Navbar"
import Annoucement from "../components/ShopSection/Annoucement"
import Products from "../components/ShopSection/Products"
import Newsletter from "../components/ShopSection/Newsletter"
import Footer from "../components/ShopSection/Footer"


const Container = styled.div``

const Title = styled.h1`
margin: 20px;
`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`

const Filter = styled.div`
margin: 20px;
`

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
`

const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    return (
        <Container>
            <Navbar />
            <Annoucement />
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>

                    <FilterText>Filter Products</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled selected>
                            Colour
                        </Option>
                        <Option>Black</Option>
                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                        <Option>Yellow</Option>
                    </Select>

                    <Select name="size" onChange={handleFilters}>
                        <Option disabled>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>

                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option selected>Newest</Option>
                        <Option>Oldest</Option>
                        <Option>Price (Ascending)</Option>
                        <Option>Price (Descending)</Option>
                    </Select>
                </Filter>

            </FilterContainer>
            <Products category={category} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList