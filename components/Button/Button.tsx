import { on } from "events"
import React from "react"

interface ButtonProps {
  children: React.ReactNode
  label: string
  type?: "primary" | "secondary"
  onClick?: () => void
}

export const Button = ({ onClick  ,children, label }: ButtonProps) => {
  return (
    <button onClick={onClick}>
      {children}
      {label}
    </button>
  )
}
