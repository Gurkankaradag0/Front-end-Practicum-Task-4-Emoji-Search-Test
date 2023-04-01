import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from '../App'

describe('Header tests', () => {
  
  beforeEach(() => {
    render(<App />)
  })
  
  test("The Header should be rendered successfully.", () => {
    // The element with the text 'Emoji Search' is retrieved
    const title = screen.getByText("Emoji Search")
    // Does this element exist in the document?
    expect(title).toBeInTheDocument()
  })
})