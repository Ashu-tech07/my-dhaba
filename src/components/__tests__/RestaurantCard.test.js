import { render, screen } from "@testing-library/react"
import RestaurantCards from "../RestaurantCards"
import MOCK_DATA from '../mocks/restaurantCardMock.json';
import '@testing-library/jest-dom'


it("Should render Restaurant Card with props data",()=>{
    render(<RestaurantCards resData={MOCK_DATA}/>)

    const name= screen.getByText("Chinese Wok");

    expect(name).toBeInTheDocument("Chinese Wok");
})