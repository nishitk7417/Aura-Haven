import React, { useState } from 'react';
import './Appointment.css';

const Appointment = (props) => {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    provider: '',
    serviceType: '',
    slot: '',
  });

  const slots = [
    { time: '9:00 AM - 10:00 AM', isAvailable: true },
    { time: '10:00 AM - 11:00 AM', isAvailable: false },
    { time: '11:00 AM - 12:00 PM', isAvailable: true },
    { time: '1:00 PM - 2:00 PM', isAvailable: true },
    { time: '3:00 PM - 4:00 PM', isAvailable: false },
  ];

  const services = [
    'Consultation',
    'Treatment',
    'Therapy',
    'Maintenance',
    'Other',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSlotSelection = (slot) => {
    if (slot.isAvailable) {
      setSelectedSlot(slot.time);
      setFormData({ ...formData, slot: slot.time });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Appointment booked for ${formData.name} (${formData.serviceType}) with ${formData.provider} at ${formData.slot}`
    );
  };

  return (
    <section className="appointment-section" style={{background: props.mode==='dark'?'rgb(33,37,41)':'white'}}>
      <div className="container" style={{background: props.mode==='dark'?'rgb(5,37,21)':'#fff'}} >
        <h2 className="section-title" style={{color: props.mode==='dark'?'white':'#198754'}}>Book an Appointment</h2>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" style={{color: props.mode==='dark'?'white':'#555'}}>Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{color: props.mode==='dark'?'white':'#555'}}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="provider" style={{color: props.mode==='dark'?'white':'#555'}}>Service Provider</label>
            <select
              id="provider"
              name="provider"
              value={formData.provider}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a provider</option>
              <option value="John Doe">John Doe</option>
              <option value="Jane Smith">Jane Smith</option>
              <option value="Michael Lee">Michael Lee</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="serviceType" style={{color: props.mode==='dark'?'white':'#555'}}>Type of Service</label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              required
            >
              <option value="" style={{color: props.mode==='dark'?'white':'#555'}}>Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="slot" style={{color: props.mode==='dark'?'white':'#555'}}>Select a Time Slot</label>
            <div className="slots">
              {slots.map((slot, index) => (
                <button
                  type="button"
                  key={index}
                  className={`slot ${slot.isAvailable ? 'available' : 'unavailable'}`}
                  onClick={() => handleSlotSelection(slot)}
                  disabled={!slot.isAvailable}
                >
                  {slot.time}
                </button>
              ))}
            </div>
            {selectedSlot && <p className="selected-slot">Selected Slot: {selectedSlot}</p>}
          </div>
          <button type="submit" className="btn btn-success">
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
