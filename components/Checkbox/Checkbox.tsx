import React from "react"
import styles from "./Checkbox.module.css"

interface CheckboxProps {
  type?: "unchecked" | "checked" | "indeterminate"
  disabled?: boolean
  state?: "idle" | "hover" | "pressed" | "focused" | "disabled"
  onChange?: (checked: boolean) => void
}

const CheckboxIcon = ({
  type,
}: {
  type: "unchecked" | "checked" | "indeterminate"
}) => {
  if (type === "indeterminate") {
    return (
      <svg className={styles.icon} viewBox="0 0 20 20">
        <path d="M5 10h10v2H5z" />
      </svg>
    )
  }
  if (type === "checked") {
    return (
      <svg className={styles.icon} viewBox="0 0 20 20">
        <path d="M8.293 13.293l-3-3 1.414-1.414L8.293 10.465l5.293-5.293L15 6.293z" />
      </svg>
    )
  }
  return null
}

export const Checkbox = ({
  type = "unchecked",
  disabled = false,
  state = "idle",
  onChange,
}: CheckboxProps) => {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(type !== "checked")
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`${styles.checkbox} ${
        type === "checked" ? styles.checkbox_checked : ""
      } ${type === "indeterminate" ? styles.checkbox_indeterminate : ""} ${
        disabled ? styles.checkbox_disabled : ""
      } ${styles[`checkbox_${state}`]}`}
    >
      <CheckboxIcon type={type} />
    </div>
  )
}
