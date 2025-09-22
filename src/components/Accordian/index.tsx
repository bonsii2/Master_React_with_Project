import { useState } from "react";
import { mydata } from "./data";
import  "./style.css";

const Accordian = () => {
  const [selecteditems, setSelecteditems] = useState<number[]>([]);
  const handleAccordian = (selectedid: number) => {
    if (selecteditems.includes(selectedid)) {
      setSelecteditems(selecteditems.filter((item) => item != selectedid));
    } else {
      setSelecteditems([...selecteditems, selectedid]);
    }
  };
  return (
    <div className="container">
      {mydata.map((data) => (
        <div
          className="accordion"
          onClick={() => handleAccordian(data.id)}
          key={data.id}
        >
          <div>
            {data.question}{" "}
            <span>{selecteditems.includes(data.id) ? "-" : "+"}</span>
          </div>
          {selecteditems.includes(data.id) && <div>{data.answer}</div>}
        </div>
      ))}
    </div>
  );
};
export default Accordian;
