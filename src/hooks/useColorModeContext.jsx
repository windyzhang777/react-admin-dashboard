import { useContext } from "react";
import { ColorModeContext } from "../theme";

export default function UseColorModeContext() {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw Error(`ColorModeContext used out of scope`);
  }
  return context;
}
