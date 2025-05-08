import { useState } from "react"
/*
 * Check for states, for hover, clicked and idle
 * Classname TEST
 */

// define enum - check 3 different states for button
// IDLE / HOVER / CLICKED
export enum ButttonState {
  idle = "idle",
  hover = "hover",
  clicked = "clicked",
}

// define interface as a prop
interface CustomButtonProps {
  buttonText: string
}

export default function CustomButton(props: CustomButtonProps) {
  const [buttonState, setButtonState] = useState<ButttonState>(
    ButttonState.idle
  )

  return (
    <input
      type="button"
      value={props.buttonText}
      className={buttonState}
      onMouseLeave={() => {
        setButtonState(ButttonState.idle)
      }}
      onMouseEnter={() => {
        setButtonState(ButttonState.hover)
      }}
      onClick={() => {
        setButtonState(ButttonState.clicked)
      }}
    />
  )
}
