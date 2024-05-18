import {useEffect, useState} from "react";

export const useDataSource = (getData:()=>any) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        (async () => {
            const data = await getData();
            setData(data);
        })();
    }, [getData]);
    return data;
}