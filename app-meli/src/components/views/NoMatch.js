import React from "react";

export const NoMatch = () => {
  return (
    <div>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "50px auto 10px"}}>
        <div>
          <img src="404.jpg" alt="404" width="300px"></img>
        </div>
      </div>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "20px auto"}}>
        <p style={{fontSize: "16px", fontWeight: "bold", margin: "0"}}>Parece que la página no existe</p>
      </div>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "20px auto"}}> 
        <a style={{display: "block"}} href="/">Ir a la página principal</a>
      </div>
    </div>
  )
}