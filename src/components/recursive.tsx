
const isObject = (data:any) => typeof data === 'object' && data !== null;

export const RecursiveComponent = ({data}:{data:any}) => {
    if(!isObject(data)){
        return <li>{data}</li>
    }

    const pais = Object.entries(data)

    return (
        <>
        {pais.map(([key, value]) => (
            <li key={key}>
                {key} :
                <ul>
                    <RecursiveComponent data={value} />
                </ul>
            </li>
        ))}
        </>
    )

}