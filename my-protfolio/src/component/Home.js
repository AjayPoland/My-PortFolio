import React from "react";
const style_div = {
  backgroundColor: "black",
  borderRadius: "0.5rem",
  opacity: "",
  zIndex:'1'

};
const style_h1={
    fontSize: "1.5rem",
  fontWeight: "bold",
  color:"white",
  opacity:"1",
  zIndex:0
}
function Home() {
  return (
    <div>
      <div style={style_div}>
        <h1 style={style_h1}>I am parent div</h1>
      </div>
    </div>
  );
}

export default Home;
