/* IMPORTANT STEPS
 * Does:
 * describe exist
 * it exist
 * test exist
 * getByText
 * render()
 */

import CustomButton, { ButttonState } from "./CustomButton"
import { fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom"

// DisplayName() JUNIT == Collection of Tests
// kan testa multipla cases
describe("Easy Examples", () => {
  // test #1
  test("2 + 2 = 4", () => {
    expect(2 + 2).toBe(4)
  })

  // test #2
  test("is 2+4 greater than 0", () => {
    expect(2 + 4).toBeGreaterThan(0)
  })

  // test #3
  test("2-2 equals 0", () => {
    expect(2 - 2).toBe(0)
  })
})

// Custom Button component + State + Classname

describe("Custom Button Component States", () => {
  // idle
  test("Check if Button Component starts with Idle", () => {
    const buttonText: string = "signup"
    const { getByText } = render(<CustomButton buttonText={buttonText} />)
    const customButtonComponent = getByText(buttonText)

    expect(customButtonComponent).toHaveClass(ButttonState.idle)
  })

  // hover
  test("Check if Button Component on hover state changes", () => {
    const buttonText: string = "signup"
    const { getByText } = render(<CustomButton buttonText={buttonText} />)
    const customButtonComponent = getByText(buttonText)

    expect(customButtonComponent).toHaveClass(ButttonState.idle)
    // fireEvent == immiterar en händelse (ex. mus-touch)
    fireEvent.mouseEnter(customButtonComponent)
    expect(customButtonComponent).toHaveClass(ButttonState.hover)
  })

  // clicked
  test("Custom Button Component on click state change", () => {
    const buttonText: string = "signup"
    const { getByText } = render(<CustomButton buttonText={buttonText} />)
    const customButtonComponent = getByText(buttonText)

    expect(customButtonComponent).toHaveClass(ButttonState.idle)
    // immiterar en mus-klick
    fireEvent.click(customButtonComponent)
    expect(customButtonComponent).toHaveClass(ButttonState.clicked)
  })

  test("This test should fail for my GitHub Action Training", () => {
    expect(2+2).toBe(999)
  })
})
