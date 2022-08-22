import React from 'react'
import axios from 'axios'

const UsersList = ({ user, getAllUser, setUpdateInfo, handleOpenForm }) => {

    const deleteUser = () => {
        const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`
        axios.delete(URL)
            .then(res => {
                getAllUser()
            })
            .catch(err => console.log(err))
    }
    const handleUpdateClick = () => {
        handleOpenForm()
        setUpdateInfo(user)

    }


    return (
        <article className='card__user'>
            <div className='card'>
                <ul className='card__list'>
                    <li><span className='card__span'>{`${user.first_name} ${user['last_name']}`}</span></li>
                    <li className='card__items'>{user.email}</li>
                    <li className='card__items'>
                        <img src="https://img.icons8.com/officexs/16/000000/birthday.png" alt="" />
                        {user.birthday}</li>
                </ul>

            </div>
            <div className='card__button'>
                <button onClick={deleteUser} className='card__btn'>
                    <img className='img' src="https://img.icons8.com/color/48/000000/trash--v1.png" />
                </button>
                <button onClick={handleUpdateClick} className='card__btn'>
                    <img src="https://img.icons8.com/fluency/48/000000/pen-1.png" />
                </button>

            </div>


        </article>
    )
}

export default UsersList