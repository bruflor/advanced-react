import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {IUserInfo} from "./user-info.tsx";

export const UserLoader = ({ userId, children }:{userId: number, children: React.ReactNode}) => {
  const [user, setUser] = useState<IUserInfo | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // @ts-ignore
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};
