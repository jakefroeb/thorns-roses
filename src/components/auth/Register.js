import React, { useRef } from "react"
import { useHistory } from "react-router-dom"

export const Register = (props) => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const businessName = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const conflictDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/customers?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists && password.current.value === verifyPassword.current.value) {
                    fetch("http://localhost:8088/customers", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            name: `${firstName.current.value} ${lastName.current.value}`,
                            businessName: businessName.current.value,
                            password : password.current.value
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                console.log(createdUser)
                                localStorage.setItem("thorns_customer", createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
        
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register for Thorns and Roses</h1>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="businessName"> Business Name </label>
                    <input ref={businessName} type="text" name="businessName" className="form-control" placeholder="businessName" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="password"> Email address </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Email address </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="verifyPassword" required />
                </fieldset>
                <fieldset>
                    <button type="submit"> Sign in </button>
                </fieldset>
            </form>
        </main>
    )
}