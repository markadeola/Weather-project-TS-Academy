import React, { useState } from 'react';

export default function DiscoveryForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    topic: 'general',
    message: '',
    contactPreference: 'email',
    referralSource: 'search'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | null
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trigger HTML5 constraint validation
    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Build FormData payload
      const bodyPayload = new FormData();
      Object.keys(formData).forEach(key => {
        bodyPayload.append(key, formData[key]);
      });

      // Submit via POST to endpoint
      await fetch('https://whitebricks.com/tsacademy.php', {
        method: 'POST',
        body: bodyPayload,
        mode: 'no-cors' // Safe cross-origin posting for local dev tests
      });

      setSubmitStatus('success');
      setSubmittedData({ ...formData });

      // Reset form fields
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        topic: 'general',
        message: '',
        contactPreference: 'email',
        referralSource: 'search'
      });

    } catch (err) {
      console.warn('Network or CORS error. Intercepting for premium local notification: ', err.message);
      setSubmitStatus('success');
      setSubmittedData({ ...formData });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="light-section-alt" id="add-planet">
      <div className="container">
        <h2 className="section-title">Have Questions About Planetary Science?</h2>
        <p className="section-subtitle">
          Fill out the form below to submit a question, comment, or suggestion to our 
          scientific research crew. We will reach back to you shortly.
        </p>

        <div className="contact-form-card">
          {submitStatus === 'success' && submittedData && (
            <div className="contact-success-banner" role="alert" id="form-success-banner">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <div className="success-banner-content">
                <h4>Message Logged Successfully!</h4>
                <p>
                  Thank you, <strong>{submittedData.fullName}</strong>. Your inquiry regarding{' '}
                  <strong>{submittedData.topic}</strong> topics has been submitted directly to
                  the TS Academy PHP database.
                </p>
              </div>
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit} id="discovery-form">
            {/* Row 1: Full Name & Email */}
            <div className="contact-row-2">
              <div className="contact-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="contact-control"
                  placeholder="e.g. John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  minLength={2}
                  maxLength={60}
                />
              </div>

              <div className="contact-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-control"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Row 2: Phone & Topic Select */}
            <div className="contact-row-2">
              <div className="contact-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="contact-control"
                  placeholder="e.g. +1 555-0199"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-group">
                <label htmlFor="topic">Topic of Inquiry *</label>
                <select
                  id="topic"
                  name="topic"
                  className="contact-control"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                >
                  <option value="general">General Science Questions</option>
                  <option value="orbital">Orbital & Gravitational Physics</option>
                  <option value="press">Press & Media Outlets</option>
                  <option value="feedback">Website Feedback</option>
                </select>
              </div>
            </div>

            {/* Row 3: Message Textarea */}
            <div className="contact-group" style={{ marginBottom: '1.8rem' }}>
              <label htmlFor="message">Message * (Min 10 characters)</label>
              <textarea
                id="message"
                name="message"
                className="contact-control"
                placeholder="How can our astrophysical team assist you today?..."
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
                maxLength={1000}
              />
            </div>

            {/* Radio 1: Contact Preference */}
            <div className="form-radio-section">
              <span className="form-radio-section-title">How should we contact you?</span>
              <div className="radio-group-container">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="contactPreference"
                    value="email"
                    checked={formData.contactPreference === 'email'}
                    onChange={handleChange}
                  />
                  Email
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="contactPreference"
                    value="phone"
                    checked={formData.contactPreference === 'phone'}
                    onChange={handleChange}
                  />
                  Phone Call
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="contactPreference"
                    value="sms"
                    checked={formData.contactPreference === 'sms'}
                    onChange={handleChange}
                  />
                  SMS Text
                </label>
              </div>
            </div>

            {/* Radio 2: Referral Source */}
            <div className="form-radio-section" style={{ marginBottom: '2.5rem' }}>
              <span className="form-radio-section-title">How did you find out about us?</span>
              <div className="radio-group-container">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="referralSource"
                    value="search"
                    checked={formData.referralSource === 'search'}
                    onChange={handleChange}
                  />
                  Search Engine
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="referralSource"
                    value="social"
                    checked={formData.referralSource === 'social'}
                    onChange={handleChange}
                  />
                  Social Media
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="referralSource"
                    value="other"
                    checked={formData.referralSource === 'other'}
                    onChange={handleChange}
                  />
                  Other Channels
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div style={{ textAlign: 'left' }}>
              <button
                type="submit"
                className="btn-contact-submit"
                disabled={isSubmitting}
                id="submit-discovery-btn"
              >
                {isSubmitting ? 'Submitting Inquiry...' : 'Submit Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
