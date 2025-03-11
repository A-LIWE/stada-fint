import { Button } from '@mui/material';
import React, { useState } from 'react'
import '../../../styles/formSection.css';
import { IFormData, IBookingForm } from '../../../interfaces';

export default function FormSection({ uncompletedBookings, createBooking }: IBookingForm) {

  const [formData, setFormData] = useState<IFormData>({
    cleaningDate: "",
    cleaningTime: "",
    cleanerChoice: "",
    serviceChoice: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = event.target;

    setFormData({ ...formData, [name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const filteredBooking = uncompletedBookings.find(booking => booking.date === formData.cleaningDate)

    if (!filteredBooking) {
      const newBooking = { cleaner: formData.cleanerChoice, customer: uncompletedBookings[0].customer, date: formData.cleaningDate, level: formData.serviceChoice, status: false, time: formData.cleaningTime };

      createBooking(newBooking);
      alert(`Du har bokat en städning ${newBooking.date} kl. ${newBooking.time}!`);

    } else {
      alert(`Du har redan en städning bokad ${formData.cleaningDate}!`);
    }
  }

  function restrictDatePicker() {

    const todaysDate = new Date();
    let monthAddZero = "";
    let dayAddZero = "";

    if (todaysDate.getMonth() <= 8) {
      monthAddZero = "0";
    }
    if (todaysDate.getDate() <= 9) {
      dayAddZero = "0";
    }

    return (`${todaysDate.getFullYear()}-${monthAddZero}${todaysDate.getMonth() + 1}-${dayAddZero}${todaysDate.getDate()}`);
  }

  return (
    <>
      <section className="booking-form-section">
        <div className="booking-form-container">
          <form id="booking-form" onSubmit={handleSubmit}>
            <h3>Boka ny städning</h3>
            <fieldset>
              <legend>Val av tjänst</legend>
              <div>
                <input type="radio" id="diamond" name="serviceChoice" value="Diamant" onChange={handleChange} required />
                <label htmlFor="diamond">Diamant</label>
                <div>
                  <input type="radio" id="top" name="serviceChoice" value="Topp" onChange={handleChange} required />
                  <label htmlFor="top">Topp</label>
                </div>
                <div>
                  <input type="radio" id="basic" name="serviceChoice" value="Basic" onChange={handleChange} required />
                  <label htmlFor="basic">Basic</label>
                </div>
                <div>
                  <input type="radio" id="window" name="serviceChoice" value="Fönster" onChange={handleChange} required />
                  <label htmlFor="window">Fönster</label>
                </div>
              </div>
            </fieldset>
            <div className="form-service-choice">
              <label htmlFor="cleaner-choice">Val av städare:</label>
              <select name="cleanerChoice" id="cleaner-choice" value={formData.cleanerChoice} onChange={handleChange} required>
                <option disabled value="">--Välj städare--</option>
                <option value="Städare 1">Städare 1</option>
                <option value="Städare 2">Städare 2</option>
                <option value="Städare 3">Städare 3</option>
              </select>
            </div>
            <div className="form-date">
              <label htmlFor="cleaning-date">Datum:</label>
              <input type="date" id="cleaning-date" name="cleaningDate" min={restrictDatePicker()} onChange={handleChange} value={formData.cleaningDate} required />
            </div>
            <div className="form-date">
              <label htmlFor="cleaning-time">Tid (07:00 - 18:00):</label>
              <input type="time" id="cleaning-time" name="cleaningTime" min="07:00" max="18:00" onChange={handleChange} value={formData.cleaningTime} required />
            </div>
            <Button type='submit' id="createBookingBtn" value="Boka städning" variant="contained" sx={{ backgroundColor: '#0D3E5E', padding: '1rem 1.5rem', fontWeight: '700' }}>Boka städning</Button>
          </form>
        </div>
      </section >
    </>
  )
}
