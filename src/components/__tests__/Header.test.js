import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"
import Header from "../Header"
import '@testing-library/jest-dom'

it('Should render Header Component with login button',()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const logginButton = screen.getByRole('button', {name:'Login' })

    expect(logginButton).toBeInTheDocument();
})

it('Should render Header Component with cart item',()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const cartItem = screen.getByText('🛒 (0 items)');

    expect(cartItem).toBeInTheDocument();
})

it('Should change Login button to Logout on click',()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const logginButton = screen.getByRole('button', {name:'Login' })

    fireEvent.click(logginButton);

    const logoutButton= screen.getByRole('button', { name: 'Logout'})
    expect(logoutButton).toBeInTheDocument();
})