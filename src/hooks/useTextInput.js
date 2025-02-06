import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

export function useTextInput(name) {
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);

  return { value, onChange, name };
}
