import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'


const defaultValue = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: '',
}

const UsersForm = ({ getAllUser, updateInfo, setUpdateInfo, handleCloseForm }) => {

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)

        }

    }, [updateInfo])


    const creatreUser = data => {
        const URL = `https://users-crud1.herokuapp.com/users/`
        axios.post(URL, data)
            .then(res => {
                console.log(res.data)
                getAllUser()
            })
            .catch(err => {
                console.log(err)
            })

    }

    const updateUser = data => {
        const URL = `https://users-crud1.herokuapp.com/users/${data.id}/`
        axios.patch(URL, data)
        .then(res => getAllUser()
        )
        .catch(err => console.log(err))

}






    const { register, reset, handleSubmit } = useForm()

    const submit = data => {

        if (updateInfo) {
            updateUser(data)
            reset(defaultValue)
            setUpdateInfo()
        } else {
            creatreUser(data)

            reset(defaultValue)
        }

        handleCloseForm()

    }

    return (
        <form onSubmit={handleSubmit(submit)} className='form' >
            <div onClick={handleCloseForm} className='form__close'>&#120;</div>
            <h2 className='form__title'>{updateInfo ? 'Update User' : 'New User'}</h2>
            <ul className='form__list'>
                <li className='form__item' >
                    <label htmlFor="first_name" ><img src="https://img.icons8.com/fluency-systems-filled/48/000000/personal-trainer-skin-type-1.png" /></label>
                    <input {...register('first_name')} type="text" id="first_name" placeholder='Firs Name' />
                    <label htmlFor="last_name" ></label>
                    <input {...register('last_name')} type="text" id="last_name" placeholder='Last Name' />
                </li>
                <li className='form__item'>
                    <label htmlFor="email" ><img src="https://img.icons8.com/material-rounded/48/000000/new-post.png" /></label>
                    <input {...register('email')} type="text" id="email" placeholder='Email' />
                </li>
                <li className='form__item'>
                    <label htmlFor="password" ><img src="https://img.icons8.com/material-sharp/48/000000/password.png" /></label>
                    <input {...register('password')} type="text" id="password" placeholder='Password' />
                </li>
                <li className='form__item'>
                    <label htmlFor="birthday" ><img src="https://img.icons8.com/fluency-systems-regular/48/000000/birthday.png" /></label>
                    <input {...register('birthday')} type="date" id="birthday" placeholder='mm/dd/yyyy' />
                </li>

            </ul>
            <button className='form__btn'>{updateInfo ? 'Update' : 'Upload'}</button>
        </form>
    )
}

export default UsersForm