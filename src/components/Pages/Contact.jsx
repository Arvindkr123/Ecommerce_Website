import React, { useState } from 'react'

const initialValue = {
    name: '',
    email: '',
    phone: ''
}


const Contact = () => {
    const [user, setUser] = useState(initialValue)
    const {name, email, phone } = user;
    const changeValue = (e) => {
        // console.log(e.target.name, e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://e-commercesharpner-default-rtdb.firebaseio.com/data.json', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([user])
            })
            if (!response.ok) {
                throw new Error('Failed to post data to the server.');
            }
        } catch (err) {
            console.log(err.message)
        }
        setUser(initialValue);
    }
    console.log(user)
    return (
        <div className='my-40'>
            <div className=' max-w-[900px] mx-auto shadow-2xl shadow-teal-950 p-6 m-6 flex justify-center items-center rounded-xl'>
                <form className='w-[50%]' onSubmit={onSubmitHandler}>
                    <p className='text-center text-4xl text-red-600  animate-bounce duration-100'>CONTACT US</p>
                    <div className='flex flex-col text-xl gap-1 mt-9'>
                        <label className='text-justify'>Name</label>
                        <input name={'name'} value={name} onChange={(e) => changeValue(e)} type='text' className='border-2 rounded-md pl-2' />
                    </div>
                    <div className='flex flex-col text-xl gap-1'>
                        <label className='text-justify'>Email</label>
                        <input name={'email'} value={email} onChange={(e) => changeValue(e)} type='email' className='border-2 rounded-md pl-2' />
                    </div>
                    <div className='flex flex-col text-xl gap-1'>
                        <label className='text-justify'>Phone Number</label>
                        <input name={'phone'} value={phone} onChange={(e) => changeValue(e)} type='number' className='border-2 rounded-md pl-2' />
                    </div>
                    <div className='text-xl mt-2'>
                        <button type='submit' className='border-2 rounded-md pl-2 bg-fuchsia-900 text-white py-2 px-3'>Add Contact</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
