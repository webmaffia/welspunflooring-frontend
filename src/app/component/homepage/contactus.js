"use client"
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        city: '',
        productCategory: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    // Validation function
    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First Name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last Name is required';
        }

        if (!formData.contactNumber.trim()) {
            newErrors.contactNumber = 'Contact Number is required';
        } else if (!/^\d{10}$/.test(formData.contactNumber)) {
            newErrors.contactNumber = 'Contact Number must be 10 digits';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.city.trim()) {
            newErrors.city = 'City is required';
        }

        if (!formData.productCategory) {
            newErrors.productCategory = 'Please select a product category';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        console.log('Validation Errors:', newErrors); // Debugging
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors({});  // Clear errors when user types
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(false);

        if (!validateForm()) {
            console.log('Form is invalid'); // Debugging
            return; // Stop submission if validation fails
        }

        console.log('Form is valid'); // Debugging

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/form-leads`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: formData }),
        });

        if (response.ok) {
            setSuccess(true);
            setFormData({
                firstName: '',
                lastName: '',
                contactNumber: '',
                email: '',
                city: '',
                productCategory: '',
                message: '',
            });
            setErrors({});
        } else {
            const result = await response.json();
            setErrors({ form: result?.error?.message || 'Submission failed' });
        }
    };

    return (
        <section className="contact" data-section="contact" id="contactForm">
            <div className="contact_container">
                <div className="section_title">Hello, how can we help you?</div>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="label_container">
                        <label className="form_label">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <span className="form_error">{errors.firstName}</span>}
                        </label>
                        <label className="form_label">
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && <span className="form_error">{errors.lastName}</span>}
                        </label>
                        <label className="form_label">
                            <input
                                type="text"
                                name="contactNumber"
                                placeholder="Contact Number"
                                value={formData.contactNumber}
                                onChange={handleChange}
                            />
                            {errors.contactNumber && <span className="form_error">{errors.contactNumber}</span>}
                        </label>
                        <label className="form_label">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email ID"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="form_error">{errors.email}</span>}
                        </label>
                        <label className="form_label">
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                            />
                            {errors.city && <span className="form_error">{errors.city}</span>}
                        </label>
                        <label className="label_select form_label">
                            <select
                                name="productCategory"
                                value={formData.productCategory}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Product Interested In</option>
                                <option value="Click N Lock® Tiles Wood">Click N Lock® Tiles Wood</option>
                                <option value="Click N Lock® Tiles Stone">Click N Lock® Tiles Stone</option>
                                <option value="Purgloss Tiles">Purgloss Tiles</option>
                                <option value="MultiStile™">MultiStile™ Tiles</option>
                                <option value="Carpet Tiles">Carpet Tiles</option>
                                <option value="Wall to Wall">Wall to Wall Carpet</option>
                                <option value="Greens">Greens</option>
                            
                            </select>
                            {errors.productCategory && <span className="form_error">{errors.productCategory}</span>}
                        </label>
                        <label className="form_label form_textarea">
                            <textarea
                                name="message"
                                placeholder="Write Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && <span className="form_error">{errors.message}</span>}
                        </label>
                    </div>
                    <button type="submit">SUBMIT</button>
                    {errors.form && <p className="form_error">{errors.form}</p>}
                    {success && <p className="form_success">Thank you! Your message has been sent successfully.</p>}
                </form>
            </div>
            
        </section>
    );
}
