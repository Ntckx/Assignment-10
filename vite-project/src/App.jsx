import Nav from "./components/Nav"
import Content from "./components/Content"
import SideBar from "./components/SideBar"
import RightBar from "./components/RightBar"
function App() {
  return (
    <div className="App">
      <Nav/>
      <SideBar/>
      <Content/>
      <RightBar/>
      <body/>
    </div>
  )
}

export default App
