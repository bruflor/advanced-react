import {useEffect,useState} from "react";

export const DataSourceWithRender = ({getData = () => {}, render}:{getData: () => any, render: (data: any) => any}) => {
    const [ resource, setResource] = useState()
    useEffect(() => {
        (async () => {
            const data = await getData();
            setResource(data)
        })()
    }, [getData]);
    return render(resource)
}