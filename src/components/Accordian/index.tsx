import { useState } from "react";
import {mydata} from "./data";
const  Accordian = () => {
    const [selected, setSelected] = useState<number | null >(null);
    const handleAccordian = (selectedid: number) =>{
        setSelected(selectedid);

    } 
    return (
      <div className="container">
        {mydata.map((data) => (
          <div
            className="accordian"
            onClick={() => handleAccordian(data.id)}
            key={data.id}
          >
            <div>
              {data.question} <span>{selected == data.id ? "-" : "+"}</span>
            </div>
            {selected == data.id && (
                <div>
                    {data.answer}
                </div>

            )}
          </div>
        ))}
      </div>
    );

}
export default Accordian;