import { FiDelete } from "@react-icons/all-files/fi/FiDelete";
import { KeyboardGrid } from "../../styles/KeyBoardGrid";

function FloatKeyboard({
  value,
  setValue,
  range,
  color,
  isFresh,
  extraClass = "",
}) {
  const append = (number) => {
    let newValue = value;
    if (isFresh) {
      setValue(number / 10);
      return;
    }
    newValue = value * 10 + number / 10;
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
    if (value > range.min) {
      let newValue = value / 10;
      newValue = parseFloat(
        newValue.toString().match(/^-?\d+(?:\.\d{0,1})?/)[0]
      );
      if (newValue < range.min + 0.09) {
        newValue = range.min;
      }
      setValue(newValue);
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
      <button onClick={cut} className="keyboard-grid__delete">
        {" "}
        <FiDelete color={color} size={36} />
      </button>
      <div className="grid_filler"></div>
    </KeyboardGrid>
  );
}

export default FloatKeyboard;
