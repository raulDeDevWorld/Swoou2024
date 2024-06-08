'use client'
import Image from 'next/image'
import Button from '../components/Button'
import style from '../styles/Card.module.css'

export default function Card (props) {
    return (

        <div
            className="w-full flex flex-col justify-between border-[1px] border-gray-200 shadow-2xl my-[25px] p-[15px] text-black"
            onClick={props.click}>
           
                <img src={props.img} className='py-[10px]' alt="logo"/>
         
           
            {props.children}
            <div className='grid grid-cols-2  gap-[5px] py-[15px]'>
                <Button theme={'Primary'} click={props.acquire}>{props.textButtonOne}</Button>
                <Button theme={'Secondary'} click={props.prove}>{props.textButtonTwo}</Button>
            </div>
        </div>

    )
}