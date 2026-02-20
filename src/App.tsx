import BreweriesComp from "./components/BreweriesComp.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import type {Brewery} from "./types/Breweries.ts";

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    background-color: #e8fccf;
    border: 7px #adc178 solid;
`;

export default function App() {

    const [data, setData] = useState<Brewery[]>([]);

    useEffect(()=> {
        async function fetchData() {
            const res = await fetch("https://api.openbrewerydb.org/v1/breweries");
            const rawData = await res.json();
            setData(rawData);
        }

        fetchData()
            .then(() => console.log("all good"))
            .catch((e: Error) => console.log("Error: " + e));
    }, [data.length]);

    return (
        <ParentDiv>
            <BreweriesComp data={data}/>
        </ParentDiv>
    )

}
