import React from 'react';
import { useForm } from 'react-hook-form';


const Contact = () => {

    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = (data) => {
        // Handle form submission here
    };

    return (
        <section className="Contact">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                type="text"
                name="name"
                ref={register({ required: true })}
                />
                {errors.name && <span>This field is required</span>}

                <input
                type="email"
                name="email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && <span>Please enter a valid email address</span>}

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact;