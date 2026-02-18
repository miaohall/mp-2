import { useState } from "react";

export default function App() {
    const [data, setData] = useState([]);

    useEffect(()=> {
        async function fetchData() {
            const res = await.fetch("api url here");
            const rawData = await res.json();
            setData(rawData);
        }
        fetchData()
            .then(()=> console.log("all good"));
            .catch((e)=>console.log("This error occurred: “ + e));
    }, [])

    return (
        <>

        </>
    )

}
