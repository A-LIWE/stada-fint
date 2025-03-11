import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IBookingTables {
  uncompletedBookings: {
    id: string,
    date: string,
    time: string,
    customer: string,
    level: string,
    cleaner: string,
    status: boolean
  }[];
  completedBookings: {
    id: string,
    date: string,
    time: string,
    customer: string,
    level: string,
    cleaner: string,
    status: boolean
  }[];
  handleDelete(booking: {}): void;
  handleDeleteSelected(booking: {}): void;
  selectedBookings: { [key: string]: boolean }
  setSelectedBookings: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
}

export interface IBooking {
  id: string;
  date: string;
  time: string;
  customer: string;
  level: string;
  cleaner: string;
  status: boolean;
}

export interface ISelectedBookings {
  [key: string]: boolean;
}

export interface ItestimonialUsers {
  name: string;
  picture: string;
  description: string;
}

export interface IServices {
  title: string;
  faIcon: IconProp;
}

export interface IFormData {
  cleaningDate: string;
  cleaningTime: string;
  cleanerChoice: string;
  serviceChoice: string;
}

export interface IBookingForm {
  uncompletedBookings: {
    id: string,
    date: string,
    time: string,
    customer: string,
    level: string,
    cleaner: string,
    status: boolean
  }[];
  createBooking: (newBooking: {}) => Promise<void>;
}
