import { sum } from "../sum"

test('Should calculate sum of two numbers',()=>{
    const result= sum(5,6);

    expect(result).toBe(11);
})