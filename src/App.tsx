import { SplitScreen } from './components/split-screen'

const LeftSideComp = () => {
  return (<h2 style={{backgroundColor:"crimson"}}>Iam the left</h2>)
}

const RightSideComp = () => {
  return (<h2 style={{backgroundColor:"cyan"}}>Iam the Right</h2>)
}
function App() {

  return (
    <SplitScreen Left={LeftSideComp} Right={RightSideComp}/>
     
  )
}

export default App
