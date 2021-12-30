import React, { useState } from 'react'
import { useCart } from '../../Context/context';
import { StyledPayment, StyledButton } from './Payment.css';

interface OrderTypes {
    id: number;
    quantity: number;
}

interface InputTypes {
    first_name: string;
    last_name: string;
    city: string;
    zip_code: string;
    order: OrderTypes[]
}

const Payment = () => {
    const { cartContent } = useCart()

    let orderArr = cartContent.map(product => ({ id: product.id, quantity: product.quantity }))

    const [inputValue, setInputValue] = useState<InputTypes>({
        first_name: '',
        last_name: '',
        city: '',
        zip_code: '',
        order: []
    });

    const sendData = () => {
        console.log(orderArr)
        setInputValue({ ...inputValue, order: orderArr })
        fetch('http://localhost:3001/api/order', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputValue),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <StyledPayment>
            Payment

            <form onSubmit={(e) => { e.preventDefault(); sendData() }}>
                <input type='text' name='name' value={inputValue.first_name} onChange={(e: any) => setInputValue({ ...inputValue, first_name: e.target.value })} required min={4} />
                <input type='text' name='surname' value={inputValue.last_name} onChange={(e: any) => setInputValue({ ...inputValue, last_name: e.target.value })} required min={5} />
                <input type='text' name='city' value={inputValue.city} onChange={(e: any) => setInputValue({ ...inputValue, city: e.target.value })} required />
                <input type='text' name='zip_code' value={inputValue.zip_code} onChange={(e: any) => setInputValue({ ...inputValue, zip_code: e.target.value })} pattern="\d{2}-\d{3}" required />
                <StyledButton type='submit' > I order and pay </StyledButton>
            </form>
        </StyledPayment>
    )
}

export default Payment