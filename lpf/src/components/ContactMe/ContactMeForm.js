import React, { useState, useEffect, useReducer, useRef } from 'react'
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner'
import styles from './ContactMeForm.module.css'

const initialFormState = {
    firstNameValue: "",
    firstNameIsValid: null,
    lastNameValue: "",
    lastNameIsValid: null,
    emailValue: "",
    emailIsValid: null,
    messageValue: "",
    messageIsValid: null,
}

function formValidityReducer(prevState, action){
    if (action.type === 'FNInput'){
        return {...prevState, firstNameValue: action.value, firstNameIsValid: action.value.length > 0}
    }
    if (action.type === 'LNInput'){
        return {...prevState, lastNameValue: action.value, lastNameIsValid: action.value.length > 0}
    }
    if (action.type === 'emailInput'){
        return {...prevState, emailValue: action.value, emailIsValid: action.value.includes('@')}
    }
    if (action.type === 'messageInput'){
        return {...prevState, messageValue: action.value, messageIsValid: action.value.length > 0}
    }
    if (action.type === 'touched'){
        if (action.id === 'name'){
            return {...prevState, firstNameIsValid: prevState.firstNameValue.length > 0}
        }else if (action.id === 'last-name'){
            return {...prevState, lastNameIsValid: prevState.lastNameValue.length > 0}
        }else if (action.id === 'email'){
            return {...prevState, emailIsValid: prevState.emailValue.length > 0}
        }else{
            return {...prevState, messageIsValid: prevState.messageValue.length > 0}
        }
    }
    return initialFormState
}

function ContactMeForm(){

    const [isLoading, setIsLoading] = useState(false)
    const [formIsValid, setFormIsValid] = useState(false)
    const [formState, formDispatch] = useReducer(formValidityReducer, initialFormState)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const fnRef = useRef()
    const lnRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const { firstNameIsValid, lastNameIsValid, emailIsValid, messageIsValid } = formState

    useEffect(() => {
        setFormIsValid(firstNameIsValid && lastNameIsValid && emailIsValid && messageIsValid)
    }, [firstNameIsValid, lastNameIsValid, emailIsValid, messageIsValid])

    async function sendMail(content){
        const response = await fetch('http://127.0.0.1:8000/main/send_mail/',{method: 'POST',body: JSON.stringify(content),headers: { "Content-Type": "application/json", "Accept": "application/json" }})
        setIsLoading(false)
        if (!response.ok){
            setError(response.error)
            return
        }
        const data = await response.json()
        setSuccess(data.data)
    }

    function identificationInputHandler(event){
        const target = event.target
        const value = target.value
        if (target.id === 'name'){
            formDispatch({type: 'FNInput', value: value})
        }else{
            formDispatch({type: 'LNInput', value: value})
        }
    }

    function emailInputHandler(event){
        const value = event.target.value
        formDispatch({type: 'emailInput', value: value})
    }

    function messageInputHandler(event){
        const value = event.target.value
        formDispatch({type: 'messageInput', value: value})
    }

    function touchedHandler(event){
        const target = event.target
        formDispatch({type: "touched", id: target.id})
    }

    function submitHandler(event){
        event.preventDefault()
        if (formIsValid){
            setIsLoading(true)
            setSuccess('')
            setError('')
            const content = {first_name: formState.firstNameValue, last_name: formState.lastNameValue, email: formState.emailValue, message: formState.messageValue}
            sendMail(content)
        }else if (!formState.firstNameIsValid){
            fnRef.current.focus()
        }else if (!formState.lastNameIsValid){
            lnRef.current.focus()
        }else if (!formState.emailIsValid){
            emailRef.current.focus()
        }else{
            messageRef.current.focus()
        }
    }

    return (
        <form method="POST" autoComplete="on" className={styles['contact-me-form']} onSubmit={submitHandler}>
            {isLoading && <LoadingSpinner/>}
            <h2 className={styles['contact-me-form__title']}>Contact Me</h2>
            <label htmlFor="name">First Name</label>
            <input id="name"
                   type="text"
                   className={formState.firstNameIsValid === false ? styles['contact-me-form__invalid-input'] : " "}
                   ref={fnRef}
                   onChange={identificationInputHandler}
                   onBlur={touchedHandler}/>
            <label htmlFor="last-name">Last Name</label>
            <input id="last-name"
                   type="text"
                   className={formState.lastNameIsValid === false ? styles['contact-me-form__invalid-input'] : " "}
                   ref={lnRef}
                   onChange={identificationInputHandler}
                   onBlur={touchedHandler}/>
            <label htmlFor="email">Email</label>
            <input id="email"
                   type="email"
                   className={formState.emailIsValid === false ? styles['contact-me-form__invalid-input'] : " "}
                   ref={emailRef}
                   onChange={emailInputHandler}
                   onBlur={touchedHandler}/>
            <label htmlFor="message">Message</label>
            <textarea id="message"
                      cols="60"
                      rows="8"
                      className={formState.messageIsValid === false ? styles['contact-me-form__invalid-input'] : " "}
                      ref={messageRef}
                      onChange={messageInputHandler}
                      onBlur={touchedHandler}/>
            {error && <p className={styles['contact-me-form-error']}>{error}</p>}
            {success && <p className={styles['contact-me-form-success']}>{success}</p>}
            <button type="submit">Contact Me</button>
        </form>
    )
}

export default ContactMeForm