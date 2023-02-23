//GTG
import "./style.css"
import Button from "./components/Button"
import LargeText from "./components/LargeText"
import { useState } from "react"

export default function App(){
  const [count, setCount] = useState(0);
  return(
    <div classname="App">
      <Button btnText={"Button"} onClickFunc={() => {setCount(count + 1)}}/>
      <LargeText text={`Button was clicked ${count} times`}/>
    </div>
  );
}
//TYJC
