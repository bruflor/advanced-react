import {useEffect, useState} from "react";
import axios from "axios";
import {IUserInfo} from "./user-info.tsx";

export const useCurrentUser = () => {
    const [user, setUser] = useState<IUserInfo | null>(null);
    useEffect(() => {
        (async () => {
            const response = await axios.get('api/current-user');
            setUser(response.data);
        })();
    }, []);
    return user
}

