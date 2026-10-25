import TypeAnnotations from "./TypeAnnotations";
import ObjectTypes from "./ObjectTypes";
import Interfaces from "./Interfaces";
import UnionTypes from "./UnionTypes";
import Enums from "./Enums";
import FunctionTypes from "./FunctionTypes";
import TypedProps from "./TypedProps";
import Narrowing from "./Narrowing";

export default function Lab3Types() {
  return (
    <div id="wd-lab3-types">
      <h2>Lab 3 Types</h2>
      <TypeAnnotations />
      <ObjectTypes />
      <Interfaces />
      <UnionTypes />
      <Enums />
      <FunctionTypes />
      <TypedProps />
      <Narrowing />
    </div>
  );
}
