import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import debounce from "lodash-es/debounce";

interface UseHooksProps {
  defaultValue: string;
  onChange: (val: string) => void;
  onSubmit: () => void;
}

export const UseHooksComponent = (props: Partial<UseHooksProps>) => {
  const { defaultValue, onChange, onSubmit } = props;
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    if (typeof onChange === "function") {
      onChange(value);
    }
  }, [value, onChange]);

  const valueRef = useRef(defaultValue);
  useEffect(() => {
    console.log(valueRef.current, value);
    valueRef.current = value;
  }, [value]);

  const handleChange = debounce((ev: ChangeEvent<HTMLInputElement>) => {
    const val = ev.target.value;
    console.log("handleChange", val);
    if (val !== value) {
      setValue(val);
    }
  }, 500);
  return (
    <div>
      <div>
        <input
          type="text"
          defaultValue={defaultValue}
          onChange={handleChange}
        />
        <button type="button" onClick={onSubmit}>
          防止抖动
        </button>
      </div>
    </div>
  );
};
