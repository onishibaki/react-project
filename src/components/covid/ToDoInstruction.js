import React from "react";

const divStyleToDo = {
  textAlign: "center",
};

const h3StyleToDo = {
  fontSize: "14px",
  fontStyle: "italic",
  fontWeight: 600,
};

const aStyleToDo = {
  paddingLeft: "10px",
  color: "#6495ED",
};

const ToDoInstruction = () => {
  return (
    <div style={divStyleToDo}>
      <h3 style={h3StyleToDo}>
        What to do when you are worried that you might be infected with the
        novel coronavirus (COVID-19)? Click Here
        <a
          style={aStyleToDo}
          href="https://japan2.usembassy.gov/pdfs/covid19-what-to-do-e.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          English
        </a>
        <a
          style={aStyleToDo}
          href="https://japan2.usembassy.gov/pdfs/covid19-what-to-do-j.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Japanese
        </a>
      </h3>
    </div>
  );
};

export default ToDoInstruction;
