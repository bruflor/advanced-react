import axios from "axios"
import React, { ReactNode, useEffect, useState } from "react"

export const ResourceLoader = ({resourceUrl, resourceName, children}: {resourceUrl: string, resourceName: string, children: ReactNode}) => {
    const [resource, setResource] = useState(null)

    useEffect(() => {
        (async() => {
            const response = await axios.get(resourceUrl);
            setResource(response.data)
        })()
    }, [resourceUrl])
    
    console.log(resource)
    return (
        <>
        {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {[resourceName]: resource})
            }
            return child
        })}
        </>
    )
}