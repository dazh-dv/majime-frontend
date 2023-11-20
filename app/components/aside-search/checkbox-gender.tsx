"use client";
import { useRef } from "react";
import { TagIcon } from "@heroicons/react/24/solid";
import styles from "./index.module.css";
import { typeGender } from "@/data/categorys";

export default function CheckboxGender({ gender }: { gender: typeGender }) {
  const refCheck: React.RefObject<HTMLInputElement> = useRef(null);

  return (
    <li className={styles.gender_item}>
      <input
        ref={refCheck}
        id={`gender-${gender.value}`}
        type="checkbox"
        name="gender"
        value={gender.value}
      />
      <TagIcon
        onClick={() => {
          if (refCheck.current) {
            refCheck.current.checked = !refCheck.current.checked;
          }
        }}
      />
      <label htmlFor={`gender-${gender.value}`}>{gender.name}</label>
    </li>
  );
}
