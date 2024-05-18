import {useEffect, useState} from "react";

export const useResource = (url: string) => {
    const [resource, setResource] = useState(null);
    useEffect(() => {
        (async () => {
            const response = await fetch(url);
            const data = await response.json();
            setResource(data);
        })();
    }, [url]);
    return resource;
}