import React, { useState } from 'react'
import "./filter.css"
import { FaSortDown } from "react-icons/fa"
import styled from 'styled-components'

const DropDownContainer = styled.div`
    width: 80%;
    border-radius: 10px;
    z-index: 999;
`;

const DropDownHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.1rem;
    font-weight: 500;
    font-size: 1rem;
    color: #AAAAAA;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 2px 2px 2px #aaaaaa;
`;

const DropDownListContainer = styled.div``;

const DropDownList = styled.ul`
    position: relative;
    padding: 0;
    margin: 0;
    margin-top: 0.5rem;
    padding-left: 1em;
    background: #ffffff;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    color: #AAAAAA;
    font-size: 1rem;
    font-weight: 500;
    &:first-child {
    padding-top: 0.8em;
`;

const ListItem = styled.li`
    list-style: none;
        margin-bottom: 0.8em;
`;

const options = ["Africa", "America", "Asia", "Europe", "Oceania" ]

function Filter() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    return (
        <DropDownContainer className="filter-container">
            <DropDownHeader onClick={toggling}>
                <div>{selectedOption || "Filter by Region"}</div>
                <span><FaSortDown /></span>
            </DropDownHeader>
            {isOpen && (
            <DropDownListContainer>
                <DropDownList>
                    {options.map(option => (
                        <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                        {option}
                        </ListItem>
                    ))}
                </DropDownList>
            </DropDownListContainer>
            )}
        </DropDownContainer>
    )
}

export default Filter

