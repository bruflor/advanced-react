import { useEffect, useState } from "react";
import axios from "axios";

//This one is the HOC
export const includeUser = (Component: any, userId: number) => {
  return (props: any) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      })();
    }, []);

    return <Component {...props} user={user} />;
  };
};
