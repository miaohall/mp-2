import styled from "styled-components";
import type {Brewery} from "../types/Breweries.ts";

const AllBrewsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;

const OneBrewDiv = styled.div<{brewery_type: string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 25%;
    padding-left: 8%;
    padding-right: 8%;
    padding-top: 4%;
    padding-bottom: 4%;
    margin: 1%;
    text-align: center;
    border: 6px #f0ead2 dotted;
    border-radius: 20px;
    font-family: Andale Mono, monospace;
    
    &:hover { /*from https://styled-components.com/docs/basics documentation*/
        background-color: #fefae0;
        color: #588157;
        border: 6px #588157 dotted;
    }
    
    background-color: ${(props)=>(props.brewery_type === "micro" ? "#6c584c" : "#adc178")};
    color: ${(props)=>(props.brewery_type === "micro" ? "#f0ead2" : "#6c584c")}
`;

export default function BreweriesComp(props : {data:Brewery[]}) {
    return (
        <AllBrewsDiv>
            {
                props.data.map((brew: Brewery) =>
                    <OneBrewDiv key={brew.id} brewery_type={brew.brewery_type}>
                        <h2>{brew.name}</h2>
                        <h3>Brewery Type: {brew.brewery_type}</h3>
                        <p>Phone #: {brew.phone}</p>
                        <h5>{brew.address_1}, {brew.city}, {brew.state_province}, {brew.postal_code}, {brew.country}</h5>
                    </OneBrewDiv>
                )
            }
        </AllBrewsDiv>
    );
}