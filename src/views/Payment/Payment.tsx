import React, { useState } from 'react'
import { H2, Input } from '../../components';
import { useCart } from '../../Context/context';
import { StyledPayment, StyledButton, StyledForm, StyledInfo } from './Payment.css';

interface OrderTypes {
    id: number;
}

interface InputTypes {
    first_name: string;
    last_name: string;
    city: string;
    zip_code: string;
    order: OrderTypes[]
}

interface ErrorTypes {
    message: string;
}

interface MessTypes {
    data: undefined | InputTypes;
    error: undefined | ErrorTypes;
}

const Payment = () => {
    const { cartContent } = useCart()


    const [inputValue, setInputValue] = useState<InputTypes>({
        first_name: '',
        last_name: '',
        city: '',
        zip_code: '',
        order: []
    });
    const [mess, setMess] = useState<MessTypes>()

    const sendData = () => {
        console.log(cartContent)

        console.log(inputValue)
        fetch('/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputValue),
        })
            .then(response => response.json())
            .then(data => {
                setMess(data)
                console.log('Success:', data);
            })
            .catch((error) => {
                setMess(error.message)
                console.error('Error:', error);
            });
    }

    return (
        <StyledPayment>
            <H2>Payment</H2>


            <StyledForm onSubmit={(e) => { e.preventDefault(); sendData() }}>
                <Input type='text' name='name' value={inputValue.first_name} onChange={(e: any) => setInputValue({ ...inputValue, first_name: e.target.value })} required min={4} placeholder='First name' />
                <Input type='text' name='surname' value={inputValue.last_name} onChange={(e: any) => setInputValue({ ...inputValue, last_name: e.target.value })} required min={5} placeholder='Last name' />
                <Input type='text' name='city' value={inputValue.city} onChange={(e: any) => setInputValue({ ...inputValue, city: e.target.value })} required placeholder='City' />
                <Input type='text' name='zip_code' value={inputValue.zip_code} onChange={(e: any) => setInputValue({ ...inputValue, zip_code: e.target.value })} pattern="\d{2}-\d{3}" required placeholder='Zip code' />
                <StyledButton type='submit' onClick={() => setInputValue({ ...inputValue, order: cartContent.map(product => ({ id: product.id })) })}> I order and pay </StyledButton>
            </StyledForm>
            {mess?.error?.message ? <StyledInfo>{mess.error.message}</StyledInfo> : null}
            {mess?.data ? <StyledInfo>Success</StyledInfo> : null}
        </StyledPayment>
    )
}

export default Payment