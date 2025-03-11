import { addDoc, collection, deleteDoc, doc } from '@firebase/firestore'
import { getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firestore-config'
import BookingTables from './components/BookingTables'
import FormSection from './components/FormSection'
import { IBooking, ISelectedBookings } from '../../../src/interfaces'

export default function BookingPage() {

  const [uncompletedBookings, setUncompletedBookings] = useState<IBooking[]>([]);
  const [completedBookings, setCompletedBookings] = useState<IBooking[]>([]);
  const [selectedBookings, setSelectedBookings] = useState<ISelectedBookings>({});

  const bookingsCollectionRef = collection(db, "bookings");

  const getUncompletedBookings = async () => {
    const q = query(bookingsCollectionRef, where("status", "==", false))
    const data = await getDocs(q);
    setUncompletedBookings(data.docs.map((doc) => ({
      ...(doc.data() as IBooking), id: doc.id
    }
    )))
  };

  const getCompletedBookings = async () => {
    const q = query(bookingsCollectionRef, where("status", "==", true))
    const data = await getDocs(q);
    setCompletedBookings(data.docs.map((doc) => ({
      ...(doc.data() as IBooking), id: doc.id
    }
    )))
  };

  useEffect(() => {
    getUncompletedBookings();
    getCompletedBookings();
  }, []);

  const createBooking = async (newBooking: {}) => {
    await addDoc(bookingsCollectionRef, newBooking);

    getUncompletedBookings();
  };

  const handleDelete = async (booking: { id: string }) => {
    await deleteDoc(doc(bookingsCollectionRef, booking.id));

    getUncompletedBookings();
  };

  const handleDeleteSelected = async () => {

    const selectedIds = Object.keys(selectedBookings).filter(id => selectedBookings[id]);
    for (const id of selectedIds) {
      await deleteDoc(doc(bookingsCollectionRef, id));
    }
    setSelectedBookings({});
    getCompletedBookings();
  };

  return (
    <>
      <BookingTables uncompletedBookings={uncompletedBookings} completedBookings={completedBookings} handleDelete={handleDelete}
        handleDeleteSelected={handleDeleteSelected} selectedBookings={selectedBookings} setSelectedBookings={setSelectedBookings}></BookingTables>
      <FormSection uncompletedBookings={uncompletedBookings} createBooking={createBooking}></FormSection>
    </>
  )
}
