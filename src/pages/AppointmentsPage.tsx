// import React from "react";
// import {
//   Box,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   IconButton,
//   Chip,
// } from "@mui/material";
// import { MoreVert } from "@mui/icons-material";

// // Mock Data
// const appointments = [
//   {
//     id: 1,
//     patientName: "John Doe",
//     patientId: "P12345",
//     doctor: "Dr. Smith",
//     department: "Cardiology",
//     appointmentDate: "2025-05-10",
//     timeSlot: "10:00 AM - 11:00 AM",
//     status: "Pending",
//   },
//   {
//     id: 2,
//     patientName: "Jane Roe",
//     patientId: "P54321",
//     doctor: "Dr. Johnson",
//     department: "Neurology",
//     appointmentDate: "2025-05-12",
//     timeSlot: "11:00 AM - 12:00 PM",
//     status: "Confirmed",
//   },
//   {
//     id: 3,
//     patientName: "Mary Sue",
//     patientId: "P67890",
//     doctor: "Dr. Brown",
//     department: "Orthopedics",
//     appointmentDate: "2025-05-14",
//     timeSlot: "02:00 PM - 03:00 PM",
//     status: "Cancelled",
//   },
//   {
//     id: 4,
//     patientName: "James Bond",
//     patientId: "P11223",
//     doctor: "Dr. Clark",
//     department: "Dermatology",
//     appointmentDate: "2025-05-15",
//     timeSlot: "01:00 PM - 02:00 PM",
//     status: "Confirmed",
//   },
// ];

// // Status Chip component
// const StatusChip = ({ status }: { status: string }) => {
//   const statusColor =
//     status === "Confirmed"
//       ? "#66bb6a"
//       : status === "Cancelled"
//         ? "#ff8a65"
//         : "#ffcc80";
//   return (
//     <Box
//       sx={{
//         backgroundColor: statusColor,
//         color: "white",
//         padding: "4px 12px",
//         borderRadius: "12px",
//         textAlign: "center",
//       }}
//     >
//       {status}
//     </Box>
//   );
// };

// const AppointmentsTable: React.FC = () => {
//   return (
//     <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
//       <Table sx={{ minWidth: 650 }}>
//         <TableHead>
//           <TableRow>
//             <TableCell>Patient Name</TableCell>
//             <TableCell>Patient ID</TableCell>
//             <TableCell>Doctor</TableCell>
//             <TableCell>Department</TableCell>
//             <TableCell>Appointment Date</TableCell>
//             <TableCell>Time Slot</TableCell>
//             <TableCell>Status</TableCell>
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {appointments.map((appointment) => (
//             <TableRow
//               key={appointment.id}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {appointment.patientName}
//               </TableCell>
//               <TableCell>{appointment.patientId}</TableCell>
//               <TableCell>{appointment.doctor}</TableCell>
//               <TableCell>{appointment.department}</TableCell>
//               <TableCell>{appointment.appointmentDate}</TableCell>
//               <TableCell>{appointment.timeSlot}</TableCell>
//               {/* <TableCell sx={{ width: "10px" }}>
//                 <StatusChip status={appointment.status} />
//               </TableCell> */}
//               <Chip
//   label={appointment.status}
//   variant="outlined"
//   color={
//     appointment.status === "Confirmed"
//       ? "success"
//       : appointment.status === "Pending"
//       ? "warning"
//       : appointment.status === "Cancelled"
//       ? "error"
//       : "default"
//   }
// />

//               <TableCell>
//                 <IconButton size="small">
//                   <MoreVert />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default AppointmentsTable;

import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
} from "@mui/material";
//icons
import { MoreVert } from "@mui/icons-material";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

// Mock Data
const appointments = [
  {
    id: 1,
    patientName: "John Doe",
    patientId: "P12345",
    doctor: "Dr. Smith",
    department: "Cardiology",
    appointmentDate: "2025-05-10",
    timeSlot: "10:00 AM - 11:00 AM",
    status: "Pending",
  },
  {
    id: 2,
    patientName: "Jane Roe",
    patientId: "P54321",
    doctor: "Dr. Johnson",
    department: "Neurology",
    appointmentDate: "2025-05-12",
    timeSlot: "11:00 AM - 12:00 PM",
    status: "Confirmed",
  },
  {
    id: 3,
    patientName: "Mary Sue",
    patientId: "P67890",
    doctor: "Dr. Brown",
    department: "Orthopedics",
    appointmentDate: "2025-05-14",
    timeSlot: "02:00 PM - 03:00 PM",
    status: "Cancelled",
  },
  {
    id: 4,
    patientName: "James Bond",
    patientId: "P11223",
    doctor: "Dr. Clark",
    department: "Dermatology",
    appointmentDate: "2025-05-15",
    timeSlot: "01:00 PM - 02:00 PM",
    status: "completed",
  },
];

const AppointmentsTable: React.FC = () => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{ '& .MuiTableCell-head': { fontWeight: 'bold',color:'#4a5568' } }}>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell>Patient ID</TableCell>
            <TableCell>Doctor</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Appointment Date</TableCell>
            <TableCell>Time Slot</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {appointments.map((appointment) => (
            <TableRow
              key={appointment.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {appointment.patientName}
              </TableCell>
              <TableCell>
                <Chip
                  size="small"
                  icon={<DescriptionOutlinedIcon />}
                  label={appointment.patientId}

                />
              </TableCell>
              <TableCell>{appointment.doctor}</TableCell>
              <TableCell>{appointment.department}</TableCell>
              <TableCell>{appointment.appointmentDate}</TableCell>
              <TableCell>{appointment.timeSlot}</TableCell>
              <TableCell>
                <Chip
                  size="small"
                  label={appointment.status}
                  variant="filled"
                  sx={{
                    backgroundColor:
                    appointment.status === "completed"?"#e2e8f0"

                      :appointment.status === "Confirmed"
                        ? "#c6f6d5"
                        : appointment.status === "Pending"
                          ? "#feebc8"
                          : appointment.status === "Cancelled"
                            ? "#fed7d7"
                            : "#ffcc80",

                    border: "none",
                  }}
                />

              </TableCell>
              <TableCell>
                <IconButton size="small">
                  <MoreVert />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppointmentsTable;
