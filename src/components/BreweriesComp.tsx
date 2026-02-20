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
    padding-top: 2%;
    padding-bottom: 2%;
    margin: 1%;
    text-align: center;
    border: 6px #f0ead2 dotted;
    border-radius: 20px;
    font-family: Andale Mono, monospace;
    
    &:hover { /*from https://styled-components.com/docs/basics documentation*/
        background-color: #fefae0;
        color: #4c956c;
        border: 6px #4c956c dotted;
    }
    
    background-color: ${(props)=>(props.brewery_type === "micro" ? "#6c584c" : "#aad576")};
    color: ${(props)=>(props.brewery_type === "micro" ? "#f0ead2" : "#6c584c")}
`;

export default function BreweriesComp(props : {data:Brewery[]}) {
    return (
        <AllBrewsDiv>
            {
                props.data.map((brew: Brewery) =>
                    <OneBrewDiv key={brew.id} brewery_type={brew.brewery_type}>
                        <h1>{brew.name}</h1>
                        <h2>Brewery Type: {brew.brewery_type}</h2>
                        <p>Phone #: {brew.phone}</p>
                        <h4>{brew.address_1}, {brew.city}, {brew.state_province}, {brew.postal_code}, {brew.country}</h4>
                    </OneBrewDiv>
                )
            }
        </AllBrewsDiv>
    );
}