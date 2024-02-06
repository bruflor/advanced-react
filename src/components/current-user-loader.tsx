import axios from "axios"
import React, { ReactNode, useState, useEffect } from "react"

type IUser = {
    name:string,
    age:number,
    country:string,
    books:string[],
} | null

export const CurrentUserLoader = ({children}:{children:ReactNode}) => {
    const [user, setUser] = useState<IUser>(null)
    
    useEffect(()=>{
        (async()=>{
            const response = await axios.get("api/current-user")
            console.log(response.data)
            setUser(response.data)
        })()
    }, [])
    
    return(
        <>{React.Children.map(children, (child) => {
            if(React.isValidElement(child)){
                return React.cloneElement(child, { user } as IUser|any)
            }

            return child
        })}</>
    )
}