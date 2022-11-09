import { KeyboardGrid } from "../../styles/KeyBoardGrid";
import { FiDelete } from "@react-icons/all-files/fi/FiDelete";

function Keyboard({ value, setValue, range, color, isFresh, extraClass = "" }) {
  const append = (number) => {
    let newValue = value;
    if (isFresh) {
      setValue(number);
      return;
    }
    if (value !== 0) {
      newValue = parseInt(value + "" + number);
    } else {
      setValue(number);
      return;
    }
    if (newValue > range.max) {
      newValue = range.max;
    } else if (newValue < range.min) {
      newValue = range.min;
    }

    if (newValue !== value) {
      setValue(newValue);
    }
  };
  const cut = () => {
    if (isFresh) {
      setValue(range.min);
      return;
    }
    if (value !== 0) {
      let newValue = value + "";
      if (newValue.length > 1) {
        newValue = parseInt(newValue.slice(0, newValue.length - 1));
        setValue(newValue);
      } else {
        setValue(0);
      }
    }
  };

  return (
    <KeyboardGrid themeColor={color} className={`keyboard-grid ${extraClass}`}>
      {Array(9)
        .fill(0)
        .map((_, i) => {
          return (
            <button
              key={i + "asd"}
              onClick={() => append(i + 1)}
              className="keyboard-grid__button"
            >
              {i + 1}
            </button>
          );
        })}{" "}
      <button onClick={() => append(0)} className="keyboard-grid__button">
        0
      </button>
      <button onClick={cut} className="keyboard-grid__delete" style={{position: "relative"}}>
        {" "}
        <FiDelete color={color} size={"2.5rem"} style={{position: "absolute", top: "0px", left: "0px"}} />
      </button>
      <div className="grid_filler"></div>
    </KeyboardGrid>
  );
}

export default Keyboard;
