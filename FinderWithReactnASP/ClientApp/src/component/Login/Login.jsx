import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!form.email) newErrors.email = 'Email diperlukan';
        if (!form.password) newErrors.password = 'Password diperlukan';
        if (form.password.length < 8) newErrors.password = 'Password harus minimal 8 karakter';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Handle form submission logic here
            console.log(form);
            alert('Form submitted successfully');
        } else {
            alert('Please fix the errors in the form');
        }
    };

    return (
        <div className='Login'>
            <main>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input
                        className='input'
                        type="email"
                        name="email"
                        placeholder="Masukkan email untuk akun Finder"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <span className='error'>{errors.email}</span>}
                </label>
                <label>
                    Password
                    <input
                        className= 'input'
                        type="password"
                        name="password"
                        placeholder="Minimal 8 karakter"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && <span className='input'>{errors.password}</span>}
                </label>
                <button
                    type="submit"
                    disabled={Object.keys(errors).length !== 0}
                >
                    Login
                </button>
            </form>
                <p className='footerText'>
                    Belum punya akun? <a className='footerLink' href='/RegisterPage'>Register di sini</a>
                </p>
            </main>
        </div>
    );
}

export default Login;
