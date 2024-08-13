import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'


describe('Contact Us Page Test Cases', ()=>{


test('Should render Contact Us page',()=>{
    render(<Contact />)

    const heading= screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
});

test('Should render button inside Contact page',()=>{
    render(<Contact />)

    // const button= screen.getByRole('button');
    const button= screen.getByText('Submit');

    expect(button).toBeInTheDocument();
})

test('Should render input box inside Contact page',()=>{
    render(<Contact />)

    
    const inputName= screen.getByPlaceholderText('name');

    expect(inputName).toBeInTheDocument();

})

test('Should render all input box inside Contact page',()=>{
    render(<Contact />)

    
    const inputBoxes= screen.getAllByRole('textbox');

    expect(inputBoxes.length).toBe(2);
    
})

})
