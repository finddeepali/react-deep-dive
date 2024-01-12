const header = React.createElement("h1", {id: "id1"}, "Hello From React !!");
const header2 = React.createElement("h1", {id: "id2"}, "Hello again From React !!");
const div = React.createElement("div", {id: "div1"}, [header, header2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);