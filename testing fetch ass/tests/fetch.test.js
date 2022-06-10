
import { getData } from "../script/append.js";

test('testing fetching of data',async()=>{

    let data=await getData('https://fakestoreapi.com/products/category/electronics');

    axpect(data).toBeTruthy()
});