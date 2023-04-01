import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import App from '../App'

describe("Emoji tests", () => {

  beforeEach(() => {
    render(<App />)
  })

  test("The Emoji List should be rendered successfully.", () => {
    // get emojis in emoji list
    const emojis = screen.getAllByTestId('emoji-row')
    // Is the number of emojis equal to 20?
    expect(emojis.length).toEqual(20)
  })

  test("The Emoji List must be recreated with the entered value.", () => {
    const value = 'flag'
    // The element with the test id of 'search-input' is retrieved
    const searchInput = screen.getByTestId("search-input")
    // The value of the 'searchInput' element is changed with the 'value' variable
    fireEvent.change(searchInput, { target: { value } })
    // get emojis in emoji list
    const emojis = screen.getAllByTestId('emoji-row')
    const emojisList = []
    // The text content of the emojis is checked. Those containing the 'value' variable are pushed to the 'emojisList' array.
    emojis.forEach(emoji => {
      const emojiTitle = emoji.children[1].textContent.toLowerCase()
      emojiTitle.includes(value) && emojisList.push(emojiTitle)
    })
    // Is the number of elements in the 'emojisList' array greater than 0?
    expect(emojisList.length).toBeGreaterThan(0)
  })

  test("When the emoji row is clicked, the emoji should be copied to the clipboard.", async () => {
    // A mock function is created for the 'document.execCommand' function
    document.execCommand = jest.fn()
    const title = "Grinning"

    // The img element of the "Grinning" emoji is retrieved
    const emojiToCopy = screen.getByAltText(title)
    // Click on the parent element of the 'emojiToCopy' img element
    fireEvent.click(emojiToCopy.parentElement)
    // Was the 'document.execCommand' function called with the 'copy' parameter?
    expect(document.execCommand).toHaveBeenCalledWith('copy')
  })

})