import React from "react"
import styles from "./Button.module.css"

interface ButtonProps {
  children?: React.ReactNode
  label: string
  type?: "primary" | "secondary"
  size?: "l" | "m" | "s"
  status?: "none" | "success" | "danger" | "warning"
  rtl?: boolean
  state?: "idle" | "hover" | "pressed" | "focused" | "disabled"
  iconL?: boolean
  iconR?: boolean
  statusindicator?: boolean
  iconLinstance?: React.ReactNode
  iconRinstance?: React.ReactNode
  onClick?: () => void
}

export const Button = ({
  onClick,
  children,
  label,
  type = "primary",
  size = "m",
  status = "none",
  rtl = false,
  state = "idle",
  iconL = false,
  iconR = false,
  statusindicator = false,
  iconLinstance,
  iconRinstance,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[`btn_${type}`]} ${
        styles[`btn_${size}`]
      } ${styles[`btn_${status}`]} ${rtl ? styles.btn_rtl : ""} ${
        styles[`btn_${state}`]
      }`}
    >
      {iconL && iconLinstance}
      {children}
      {label}
      {iconR && iconRinstance}
      {statusindicator && <span className={styles["status-indicator"]}></span>}
    </button>
  )
}
