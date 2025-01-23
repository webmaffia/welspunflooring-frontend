'use client';

import { useState } from 'react';

const InspiroForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    if (!validateForm()) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/inspiro-clubs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: formData }),
      });
      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', location: '', email: '' });
      } else {
        const result = await response.json();
        setErrors({ form: result?.error?.message || 'Submission failed' });
      }
    } catch (error) {
      setErrors({ form: 'Submission failed' });
    }
  };

  return (
    <section data-section="inspiro_club" className="inspiro_club">
      <img src="/images/interior/architect/inspiro_black.webp" alt="Inspiro Club" className="inspiro_img" width="584" height="348" />
      <div className="inspiro_club_container">
        <h2 className="subtitle_60">Be a part of the Welspun Inspiro Club</h2>
        <p className="para">Share your details here :</p>
        <form onSubmit={handleSubmit} noValidate>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="form_error">{errors.name}</span>}

          <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
          {errors.location && <span className="form_error">{errors.location}</span>}

          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="form_error">{errors.email}</span>}

          <button type="submit" class="view_link purpleBg">
                <div class="link_cta">
                    <div class="arrow_bg">
                        <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                    </div>
                    <span>READ ALL</span>
                </div>
            </button>
          {errors.form && <p className="form_error">{errors.form}</p>}
          {success && <p className="form_success">Successfully submitted!</p>}
        </form>
      </div>
    </section>
  );
};

export default InspiroForm;
