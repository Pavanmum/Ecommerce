import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import Custominput from '../components/Custominput'
import Meta from '../components/Meta'



const Signup = () => {

    const[user, setUser] = useState({
        firstName : "",
        lastName : "",
        mobile : "",
        email : "",
        password : "",
    })

    const handleChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value});
    }
    const handelSubmit = async (e) => {
        e.preventDefault();
        console.log(user)
    }
    return (
        <>
            <Meta title={"Signup page"} />
            <BreadCrumb title="Signup" />
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>
                                Create Account
                            </h3>
                            <form action="" className='d-flex flex-column gap-15' onSubmit={handelSubmit}>
                                <Custominput type="text" name="firstName" placeholder='First Name' value={user.firstName} onChange={handleChange} />
                                <Custominput type="text" name="lastName" placeholder='Last Name' value={user.lastName} onChange={handleChange}/>
                                <Custominput type="tel" name="mobile" placeholder='Mobile Number' value={user.mobile} onChange={handleChange}/>
                                <Custominput type="email" name="email" placeholder='Email' value={user.email} onChange={handleChange}/>
                                <Custominput type="password" name="password" placeholder='Password' value={user.password} onChange={handleChange}/>
                                <div>
                                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button border-0'>Create</button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Signup
