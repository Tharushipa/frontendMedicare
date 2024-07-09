// AppointmentHistory.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/v1/appointments/history", { withCredentials: true });
        setAppointments(data.appointments);
      } catch (error) {
        console.error("Error fetching appointment history:", error);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Appointment History</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            {/* Display appointment details here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentHistory;
