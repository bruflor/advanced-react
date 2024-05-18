import { useEffect, useState } from "react";
import axios from "axios";

const toCapital = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const includeUpdatableResouce = (
  Component,
  resourceUrl,
  resourceName
) => {
  return (props) => {
    const [data, setData] = useState(null);
    const [updatableData, setUpdatableData] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourceUrl);
        setData(response.data);
        setUpdatableData(response.data);
      })();
    }, []);

    const changeHandler = (updates) => {
      setUpdatableData({ ...updatableData, ...updates });
    };

    const dataPostHandler = async () => {
      const response = await axios.post(resourceUrl, {
        [resourceName]: updatableData,
      });
      setData(response.data);
      setUpdatableData(response.data);
    };

    const resetHandler = () => {
      setUpdatableData(data);
    };

    const resourceProps = {
      [resourceName]: updatableData,
      [`onChange${toCapital(resourceName)}`]: changeHandler,
      [`onSave${toCapital(resourceName)}`]: dataPostHandler,
      [`onReset${toCapital(resourceName)}`]: resetHandler,
    };

    return <Component {...props} {...resourceProps} />;
  };
};
