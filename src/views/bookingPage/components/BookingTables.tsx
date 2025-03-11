import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import '../../../styles/bookingTables.css';
import { IBookingTables } from '../../../interfaces';

export default function BookingTables({ uncompletedBookings, completedBookings, setSelectedBookings, selectedBookings, handleDelete, handleDeleteSelected }: IBookingTables) {

  return (
    <>
      <h2 id="welcome-headline" className="headline-my-bookings">Välkommen <span>{uncompletedBookings && uncompletedBookings[0] && uncompletedBookings[0].customer}</span>!</h2>

      <section className="tables-bookings">
        <article>
          <h2>Kommande städningar</h2>
          <table id="table-container-booked">
            <thead>
              <tr>
                <th>Datum</th>
                <th>Städare</th>
                <th>Nivå</th>
              </tr>
            </thead>
            <tbody id="table-body-booked">
              {
                uncompletedBookings.sort((a: any, b: any) => {
                  return new Date(a.date).getTime() - new Date(b.date).getTime()
                }).map(booking => {
                  return (
                    <tr key={booking.id}>
                      <td>{`${booking.date} ${booking.time}`}</td>
                      <td>{booking.cleaner}</td>
                      <td>{booking.level}</td>
                      <td><FontAwesomeIcon icon={faTrashCan} onClick={() => handleDelete(booking)} /></td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </article>

        <article>
          <h2>Utförda städningar</h2>
          <table id="table-container-completed">
            <thead>
              <tr>
                <th>Datum</th>
                <th>Städare</th>
                <th>Nivå</th>
              </tr>
            </thead>
            <tbody id="table-body-completed">
              {completedBookings.sort((a: any, b: any) => {
                return new Date(a.date).getTime() - new Date(b.date).getTime()
              }).map(booking => {
                return (
                  <tr key={booking.id}>
                    <td>{`${booking.date} ${booking.time}`}</td>
                    <td>{booking.cleaner}</td>
                    <td>{booking.level}</td>
                    <td><input type="checkbox" onChange={(event) => {
                      setSelectedBookings({ ...selectedBookings, [booking.id]: event.target.checked });
                    }} /></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className="delete-bookings-btn">
            <Button variant="contained" sx={{ backgroundColor: '#0D3E5E', padding: '1rem 1.5rem', fontWeight: '700' }} onClick={handleDeleteSelected}>Radera historik</Button>
          </div>
        </article>
      </section>
    </>
  )
}
