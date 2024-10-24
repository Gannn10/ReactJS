import React from 'react'
import FormForgot from '../components/Fragments/FormForgot'
import AuthLayout1 from '../components/Layout/AuthLayout1'

const SignForgot = () => {
  return (

    <AuthLayout1 type="sign forgot">
        <div>
        <h1 class="text-center font-bold text-3xl">Forgot Password</h1>
        <br/>
        <h2>Enter Your Email Adress to get the Password reset link</h2>
        </div>
        <FormForgot/>
    </AuthLayout1>
  )
}

export default SignForgot