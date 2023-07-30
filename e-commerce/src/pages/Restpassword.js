import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import Meta from '../components/Meta'
import Custominput from "../components/Custominput"

const Restpassword = () => {
    return (
        <>
            <Meta title={"Rest page"} />
            <BreadCrumb title="Reset Page" />
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>
                                Reset Password
                            </h3>
                            <form action="" className='d-flex flex-column gap-15'>
                                <Custominput type="password" name="password" placeholder='Password' />
                                <Custominput type="password" name="password" placeholder='Confirm Password' />

                                <div>

                                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button border-0'>OK</button>
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

export default Restpassword
