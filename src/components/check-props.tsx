import React, {ReactComponentElement} from "react";

export const checkProps = (Component:ReactComponentElement<any>) => {
  return (props: any) => {
    console.log(props);
    return <Component {...props} />;
  };
};
