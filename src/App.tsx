import BreweriesComp from "./components/BreweriesComp.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import type {Brewery} from "./types/Breweries.ts";

const ParentDiv = styled.div`
    width: 70vw;
    margin: 0 auto;
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
    }, []);

    return (
        <ParentDiv>
            <BreweriesComp data={data} />
        </ParentDiv>
    )

}
