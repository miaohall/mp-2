import styled from "styled-components";
import type {Brewery} from "../types/Breweries.ts";

const AllBrewsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #dde5b6;
    border: 3px #adc178;
`;

const OneBrewDiv = styled.div<{country: string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 25%;
    padding: 3%;
    margin: 1%;
    text-align: center;
    background-color: #6c584c;
    color: ${(props)=>(props.country === "United States" ? '#dde5b6' : '#f0ead2')}
    
`;

export default function BreweriesComp(props : {data:Brewery[]}) {
    return (
        <AllBrewsDiv>
            {
                props.data.map((brew: Brewery) =>
                    <OneBrewDiv key={brew.id} country={brew.country}>
                        <h2>{brew.name}</h2>
                        <h3>{brew.brewery_type}</h3>
                        <p>{brew.phone}</p>
                        <h5>{brew.city}, {brew.state_province}, {brew.postal_code}, {brew.country}</h5>
                    </OneBrewDiv>
                )
            }
        </AllBrewsDiv>
    );
}