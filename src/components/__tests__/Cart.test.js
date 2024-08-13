import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import RestaurantMenu from '../RestaurantMenu'
import Header from '../Header'
import Cart from '../Cart'
import MOCK_DATA from '../mocks/ResMenuMock.json'
import { Provider } from 'react-redux'
import appStore from '../../utils/appStore'
import { BrowserRouter } from 'react-router-dom'

global.fetch= jest.fn(()=>{
    return Promise.resolve({
        json: ()=> Promise.resolve(MOCK_DATA)
})
})

describe('Should Render Restaurant Menu and Add Items into Cart',()=>{


it('Should Load Restaurant Menu Component', async ()=>{
    await act(async()=> render( 
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <RestaurantMenu />
            <Cart />
        </Provider>
        </BrowserRouter>
    
))

    const accordianHeader= screen.getByText('Recommended (18)');
    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId('foodItems').length).toBe(18);

    expect(screen.getByText('🛒 (0 items)')).toBeInTheDocument();
    
    // const addBtn= screen.getAllByRole('button', {name : 'Add +'})

    // fireEvent.click(addBtn[0]);
    // expect(screen.getByText('🛒 (1 item)')).toBeInTheDocument();

    // fireEvent.click(addBtn[1]);
    // expect(screen.getByText('🛒 (2 items)')).toBeInTheDocument();

    // expect(screen.getAllByTestId('foodItems').length).toBe(20); // because in Cart component 2 element is also rendered 

})

it('Should add one item to cart', async ()=>{
    await act( async ()=>render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <RestaurantMenu/>
            <Cart/>
            </Provider>
            </BrowserRouter>
    ))

    const accordianHeader= screen.getByText('Recommended (18)');
    fireEvent.click(accordianHeader);
    const addBtn= screen.getAllByRole('button', {name : 'Add +'})

    fireEvent.click(addBtn[0]);
    expect(screen.getByText('🛒 (1 item)')).toBeInTheDocument();
    
    
})

it('Should add two items to cart', async ()=>{
    await act( async ()=>render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <RestaurantMenu/>
            <Cart/>
            </Provider>
            </BrowserRouter>
    ))
    const accordianHeader= screen.getByText('Recommended (18)');
    fireEvent.click(accordianHeader);
    const addBtn= screen.getAllByRole('button', {name : 'Add +' })

    fireEvent.click(addBtn[1]);
    expect(screen.getByText('🛒 (2 items)')).toBeInTheDocument();
    
})

})