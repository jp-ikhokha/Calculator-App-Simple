import { render, screen, waitFor  } from "@testing-library/react";
import Calculator from '@/components/Calculator/Calculator';
import userEvent from '@testing-library/user-event';


test('the screen renders a display and a calculation', () => {

  render(<Calculator />);
  
  expect(screen.getByTestId('result-display')).toBeInTheDocument();
  expect(screen.getByTestId('calculation')).toBeInTheDocument();
})



test('the screen renders 16 buttons', () => {

  render(<Calculator />);
  const allButtons = screen.queryAllByRole('button')
  
  expect(allButtons.length).toBe(16);
})


test('when a button is clicked its value is sent to the calculation', async ()=>{
     render(<Calculator />);

     const aButton = screen.getByRole('button', {  name: /8/i})
     userEvent.click(aButton);
     
     const calculation = await screen.findByDisplayValue('8');
     expect(calculation).toBeInTheDocument();
})

test('when the delete button is clicked the input clears the display', async() => {
     render(<Calculator />);

     const aButton = screen.getByRole('button', {  name: /1/i})
     userEvent.click(aButton);
     
     const delBtn = await screen.findByRole('button', {  name: /del/i})

     userEvent.click(delBtn);

     const clearedCalculation = screen.getByTestId('calculation');
    
     await waitFor(() => expect(clearedCalculation).toHaveDisplayValue(""));
})


test('when the equals button is clicked the display shows the calculation addition', async()=>{
     render(<Calculator />);

     //set the calculation
     const aButton = screen.getByRole('button', {  name: /8/i})
     userEvent.click(aButton);

     const addButton = screen.getByRole('button', {  name: /\+/i})
     userEvent.click(addButton);

     const bButton = screen.getByRole('button', {  name: /2/i})
     userEvent.click(bButton);

     const calculation = screen.getByTestId('calculation');
    
     await waitFor(() => expect(calculation).toHaveDisplayValue("8+2"));

     const equalButton = screen.getByRole('button', {  name: /=/i});
     userEvent.click(equalButton);

     const resultDisplay = screen.getByTestId('result-display');
    
     await waitFor(() => expect(resultDisplay).toHaveDisplayValue("10"));

})

test('when the equals button is clicked the display shows the calculation subtract', async()=>{
     render(<Calculator />);

     //set the calculation
     const aButton = screen.getByRole('button', {  name: /8/i})
     userEvent.click(aButton);

     const addButton = screen.getByRole('button', {  name: /\-/i})
     userEvent.click(addButton);

     const bButton = screen.getByRole('button', {  name: /2/i})
     userEvent.click(bButton);

     const calculation = screen.getByTestId('calculation');
    
     await waitFor(() => expect(calculation).toHaveDisplayValue("8-2"));

     const equalButton = screen.getByRole('button', {  name: /=/i});
     userEvent.click(equalButton);

     const resultDisplay = screen.getByTestId('result-display');
    
     await waitFor(() => expect(resultDisplay).toHaveDisplayValue("6"));

})

test('when the equals button is clicked the display shows the calculation multiply', async()=>{
     render(<Calculator />);

     //set the calculation
     const aButton = screen.getByRole('button', {  name: /8/i})
     userEvent.click(aButton);

     const addButton = screen.getByRole('button', {  name: /\*/i})
     userEvent.click(addButton);

     const bButton = screen.getByRole('button', {  name: /2/i})
     userEvent.click(bButton);

     const calculation = screen.getByTestId('calculation');
    
     await waitFor(() => expect(calculation).toHaveDisplayValue("8*2"));

     const equalButton = screen.getByRole('button', {  name: /=/i});
     userEvent.click(equalButton);

     const resultDisplay = screen.getByTestId('result-display');
    
     await waitFor(() => expect(resultDisplay).toHaveDisplayValue("16"));

})

test('when the equals button is clicked the display shows the calculation divide', async()=>{
     render(<Calculator />);

     //set the calculation
     const aButton = screen.getByRole('button', {  name: /8/i})
     userEvent.click(aButton);

     const addButton = screen.getByRole('button', {  name: /\//i})
     userEvent.click(addButton);

     const bButton = screen.getByRole('button', {  name: /2/i})
     userEvent.click(bButton);

     const calculation = screen.getByTestId('calculation');
    
     await waitFor(() => expect(calculation).toHaveDisplayValue("8/2"));

     const equalButton = screen.getByRole('button', {  name: /=/i});
     userEvent.click(equalButton);

     const resultDisplay = screen.getByTestId('result-display');
    
     await waitFor(() => expect(resultDisplay).toHaveDisplayValue("4"));

})