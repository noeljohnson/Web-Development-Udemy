function Button({btnText  = "Click Me", onClickFunc}){
  return (
    <button onClick={onClickFunc}>{btnText}</button>
  )
}

export default Button
