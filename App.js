import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React !!!"
// );

//simeple way
// const heading = (
//   <h1 id="heading" className="test">
//     This is JSX Heading T..
//   </h1>
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// first functional component

const TitleComponent = () => <h1>My Title G</h1>;
const SimpleVaiable = <span>Simplme Variable</span>;

const HeaderComponent = () => (
  <div>
    <TitleComponent />
    <TitleComponent></TitleComponent>
    {TitleComponent()}
    Test
    <div>{SimpleVaiable}</div>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
