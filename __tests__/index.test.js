import { render, screen } from "@testing-library/react";
import Home from '@/pages/index';



  describe('Home', () => {
  it('renders a heading and a footer', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Cool-culator App/i,
    })

    expect(heading).toBeInTheDocument()
    
  })
})
