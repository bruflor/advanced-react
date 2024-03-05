import { UserInfo } from './components/user-info'
import {DataSourceWithRender} from "./components/data-source-with-render.tsx";
import axios from "axios";
// import {ResourceLoader} from "./components/resource-loader.tsx";
// import {createElement} from "react";

function App() {
const fetchData = async (url:string) => {
    const response = await axios.get(url)
    return response.data
}
  return (
    <>
        {/*<ResourceLoader resourceUrl={"/api/users/2"} resourceName={"user"}>*/}
        {/*    /!* <UserInfo /> *!/*/}
        {/*    {createElement(UserInfo)}*/}
        {/*</ResourceLoader>*/}
      <DataSourceWithRender getData={()=>fetchData("/api/users/1")} render={(resource)=><UserInfo user={resource}/>} />
    </>
     
  )
}

export default App
