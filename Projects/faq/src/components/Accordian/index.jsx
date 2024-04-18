import { useState } from "react";
import './style.css';
import data from "./data.jsx";

function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <>
    <div className="wrapper">
      <div className="accordion">
      <h1 className="heading">FAQ's</h1>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span onClick={() => handleSingleSelection(dataItem.id)}>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className= "content">{dataItem.answer}</div>
              )
            : null
            }
            </div>
          ))
        ) : (
          <div>No Data found!</div>
        )}
      </div>
    </div>
    </>
  );
}

export default Accordion
