import React, { useState } from 'react';
import './Register.css'
function Register() {
const [form, setForm] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    
    if (!form.fullName) newErrors.fullName = 'Nama Lengkap diperlukan';
    if (!form.phoneNumber) newErrors.phoneNumber = 'Nomor Handphone diperlukan';
    if (!form.email) newErrors.email = 'Email diperlukan';
    if (!form.password) newErrors.password = 'Password diperlukan';
    if (form.password.length < 8) newErrors.password = 'Password harus minimal 8 karakter';
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Password tidak cocok';

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
    <div className="Register">
    <main>
        <h1>Daftar Akun</h1>
        <form onSubmit={handleSubmit}>
        <label>
            Nama Lengkap
            <input
            type="text"
            name="fullName"
            placeholder="Masukkan nama lengkap sesuai identitas"
            value={form.fullName}
            onChange={handleChange}
            required
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
        </label>
        <label>
            Nomor Handphone
            <input
            type="tel"
            name="phoneNumber"
            placeholder="Isi dengan nomor handphone yang aktif"
            value={form.phoneNumber}
            onChange={handleChange}
            required
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </label>
        <label>
            Email
            <input
            type="email"
            name="email"
            placeholder="Masukkan email untuk akun Finder"
            value={form.email}
            onChange={handleChange}
            required
            />
            {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
            Password
            <input
            type="password"
            name="password"
            placeholder="Minimal 8 karakter"
            value={form.password}
            onChange={handleChange}
            required
            />
            {errors.password && <span className="error">{errors.password}</span>}
        </label>
        <label>
            Ulangi Password
            <input
            type="password"
            name="confirmPassword"
            placeholder="Masukkan kembali password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </label>
        <button type="submit">Daftar</button>
        </form>
        <p>Sudah punya akun? <a href='/LoginPage'>Masuk di sini</a></p>
    </main>
    </div>
);
}

export default Register;
