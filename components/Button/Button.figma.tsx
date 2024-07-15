import React from "react"
import { Button } from "./Button"
import figma from "@figma/code-connect"

/**
 * -- This file was auto-generated by `figma connect create` --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Button,
  "https://www.figma.com/design/46ekGSoaClnTutKM5a09z4/Components?node-id=46-156&t=YbipPO26AbTPmA50-4",
  {
    props: {
      iconL: figma.boolean("icon L"),
      iconR: figma.boolean("icon R"),
      labeltextrtl: figma.string("✏️ label text rtl"),
      statusindicator: figma.boolean("status-indicator"),
      labeltext: figma.string("✏️ label text"),
      iconLinstance: figma.instance("🔁 icon L"),
      iconRinstance: figma.instance("🔁 icon R"),
      type: figma.enum("type", {
        primary: "primary",
        secondary: "secondary",
      }),
      size: figma.enum("size", {
        l: "l",
        m: "m",
        s: "s",
      }),
      status: figma.enum("status", {
        none: "none",
        success: "success",
        danger: "danger",
        warning: "warning",
      }),
      rtl: figma.boolean("rtl"),
      state: figma.enum("state", {
        idle: "idle",
        hover: "hover",
        pressed: "pressed",
        focused: "focused",
        disabled: "disabled",
      }),
    },
    example: ({ labeltext, ...props }) => (
      <Button {...props} label={labeltext} onClick={() => {}}>
        {labeltext}
      </Button>
    ),
  }
)