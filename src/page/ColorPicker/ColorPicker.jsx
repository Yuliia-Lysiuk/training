import { useState } from "react"
import { Button } from "./ColorPicker.styled"

export const ColorPicker = ({ options }) => {
    const [activeIdx, setActiveIdx] = useState(0);
   
    const { label } = options[activeIdx];

    return <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <Button isActive={activeIdx === index} color={color}
              key={label}
              onClick={() => setActiveIdx(index)}
            ></Button>
          ))}
        </div>
      </div>
}