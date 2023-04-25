import SingleColor from "./SingleColor";
import { v4 as uuidv4 } from "uuid";
const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor key={uuidv4()} color={color} index={index} />;
      })}
    </section>
  );
};
export default ColorList;
