// ---------------------- Imports ----------------------
import React, { useState } from 'react';
import {
      AppBar, Box, Drawer, CssBaseline, Toolbar, Typography, Button,
      IconButton, Divider, Avatar, Tooltip, ListItemButton,
      ListItemIcon, ListItemText, List
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Icon imports
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ScienceIcon from '@mui/icons-material/Science';
import InventoryIcon from '@mui/icons-material/Inventory';
import BadgeIcon from '@mui/icons-material/Badge';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import GridViewIcon from '@mui/icons-material/GridView';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

//import images or Logos
import hmsLogo from '../../assets/images/hmsLogo_white_on_transparent.png';
// Import the simplified SearchBox component
import SearchBox from '../header/SearchBox'; 
import AppointmentsPage from '../../pages/AppointmentsPage';
// ---------------------- Theme Configuration ----------------------
const darkBlueTheme = createTheme({
      palette: {
            primary: { main: '#1a3a63', dark: '#132644' },
            secondary: { main: '#ffffff' },
            background: { default: '#ffffff', paper: '#ffffff' },
      },

      typography: {
            // fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontFamily: `"Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"`,
            fontSize: 14,
      },

});

// ---------------------- Main Component ----------------------
export const HospitalManagementSystem: React.FC = () => {
      // ---------------------- State ----------------------
      const [selectedIndex, setSelectedIndex] = useState(1); // Active menu index
      const [sidebarOpen, setSidebarOpen] = useState(true);  // Sidebar toggle

      // ---------------------- Handlers ----------------------
      const handleListItemClick = (index: number) => setSelectedIndex(index);
      const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

      return (
            <ThemeProvider theme={darkBlueTheme}>
                  <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
                        <CssBaseline />

                        {/* ---------------------- Sidebar / Drawer ---------------------- */}
                        <Drawer
                              sx={{
                                    width: sidebarOpen ? 240 : 65,
                                    flexShrink: 0,
                                    '& .MuiDrawer-paper': {
                                          width: sidebarOpen ? 250 : 65,
                                          boxSizing: 'border-box',
                                          bgcolor: 'primary.main',
                                          color: 'white',
                                          transition: 'width 225ms',
                                          overflowX: 'hidden',
                                          display: 'flex',
                                          flexDirection: 'column',
                                    },
                              }}
                              variant="permanent"
                              anchor="left"
                        >
                              {/* ---- Sidebar Header with toggle button ---- */}
                              <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: sidebarOpen ? 'space-between' : 'center' }}>
                                    {sidebarOpen ? (
                                          <> 
                                                <img src={hmsLogo} alt="" style={{width:"55px",marginLeft:"-5px", marginRight:"-40px"}}/>
                                                <Typography variant="h6">e-HMS</Typography>
                                                <IconButton onClick={toggleSidebar} size="small" sx={{ color: 'white',marginRight:"-10px" }}>
                                                      <ChevronLeftIcon />
                                                </IconButton>
                                          </>
                                    ) : (
                                          <IconButton onClick={toggleSidebar} size="small" sx={{ color: 'white' }}>
                                                <GridViewIcon />
                                          </IconButton>
                                    )}
                              </Box>

                              <Divider sx={{ bgcolor: 'rgba(255,255,255,0.25)' }} />

                              {/* ---- Sidebar Navigation List ---- */}
                              <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
                                    <List
                                          sx={{
                                                // pt: 1,
                                                height: '100%',
                                                // overflowY: 'auto',
                                                '&::-webkit-scrollbar': { display: 'none' },
                                                scrollbarWidth: 'none',
                                                msOverflowStyle: 'none',
                                                pt:0,
                                          }}
                                    >
                                          {[
                                                { text: 'Home', icon: <HomeIcon />, index: 0 },
                                                { text: 'Appointments', icon: <EventNoteIcon />, index: 1 },
                                                { text: 'Out Patients', icon: <PersonIcon />, index: 2 },
                                                { text: 'In Patients', icon: <PeopleIcon />, index: 3 },
                                                { text: 'Nurse Station', icon: <LocalHospitalIcon />, index: 4 },
                                                { text: 'Pharmacy', icon: <MedicalServicesIcon />, index: 5 },
                                                { text: 'Lab', icon: <ScienceIcon />, index: 6 },
                                                { text: 'Inventory', icon: <InventoryIcon />, index: 7 },
                                                { text: 'Human Resource', icon: <BadgeIcon />, index: 8 },
                                                { text: 'Finance', icon: <AttachMoneyIcon />, index: 9 },
                                                { text: 'Blood Bank', icon: <BloodtypeIcon />, index: 10 },
                                                { text: 'Ambulance', icon: <AirportShuttleIcon />, index: 11 },
                                          ].map((item) => (
                                                <Tooltip key={item.index} title={!sidebarOpen ? item.text : ""} placement="right" arrow>
                                                     
                                                      <ListItemButton
                                                            selected={selectedIndex === item.index}
                                                            onClick={() => handleListItemClick(item.index)}
                                                            sx={{
                                                                  borderLeft: '4px solid transparent',
                                                                 
                                                                  // borderRadius:"10px 0px 0px 10px", // always reserve space for border
                                                                  '&.Mui-selected': {
                                                                        bgcolor: 'rgba(255,255,255,0.1)',
                                                                        borderLeft: '4px solid rgb(88, 173, 243) ',
                                                                        // now it just changes color
                                                                        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                                                              color: 'white',
                                                                        },
                                                                        '&:hover': {
                                                                              bgcolor: 'rgba(255,255,255,0.15)',
                                                                        },
                                                                  },
                                                                  '&:hover': {
                                                                        bgcolor: 'rgba(255,255,255,0.05)',
                                                                        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                                                              color: 'white',
                                                                        },
                                                                  },
                                                                  pl: sidebarOpen ? 2 : 1.5,
                                                                  justifyContent: sidebarOpen ? 'initial' : 'center',
                                                                  mb: sidebarOpen ? 0 : 1,
                                                            }}
                                                      >

                                                            <ListItemIcon
                                                                  sx={{
                                                                        color: "silver",
                                                                        minWidth: sidebarOpen ? 35 : 0,
                                                                        mr: sidebarOpen ? 3 : 0,

                                                                        justifyContent: 'center',
                                                                  }}
                                                            >
                                                                  {item.icon}
                                                            </ListItemIcon>
                                                            {sidebarOpen && <ListItemText sx={{ color: "silver" }} primary={item.text} />}
                                                      </ListItemButton>
                                                </Tooltip>
                                          ))}
                                    </List>
                              </Box>

                              {/* ---- Sidebar Footer with user profile ---- */}
                              <Divider sx={{ bgcolor: 'rgba(255,255,255,0.25)' }} />
                              <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: sidebarOpen ? 'flex-start' : 'center' }}>

                                    <Tooltip title={!sidebarOpen ? 'Dr. Sarah Johnson - Physician' : ''} placement="right" arrow>
                                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Avatar sx={{ width: 36, height: 36, mr: sidebarOpen ? 2 : 0, bgcolor: 'rgba(255,255,255,0.2)' }}>
                                                      <PersonIcon />
                                                </Avatar>
                                                {sidebarOpen && (
                                                      <Box>
                                                            <Typography variant="subtitle2">Dr. Sarah Johnson</Typography>
                                                            <Typography variant="caption" sx={{ opacity: 0.7 }}>Physician</Typography>
                                                      </Box>
                                                )}
                                          </Box>
                                    </Tooltip>
                              </Box>
                        </Drawer>

                        {/* ---------------------- Main Content Area ---------------------- */}
                        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', height: '100vh', overflow: 'auto' }}>

                              {/* ---- Top AppBar with title, search and buttons ---- */}
                              <AppBar position="static" elevation={0} sx={{ bgcolor: 'background.paper', color: 'text.primary', borderBottom: '1px solid #e0e0e0' }}>
                                    <Toolbar>
                                          <Typography variant="h5" sx={{ display: { xs: 'none', sm: 'block' }, fontWeight: 500 ,color:"#2d3748"}}>Appointments</Typography>
                                          <Box sx={{ flexGrow: 1 }} />
                                          {/* <SearchBox />
              <Button variant="outlined" sx={{ mx: 1, borderRadius: 1, textTransform: 'none' }}>Filter</Button>
              <Button variant="contained" sx={{ bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' }, borderRadius: 1, textTransform: 'none' }}>
                Create Appointment
              </Button> */}
                                    </Toolbar>
                              </AppBar>

                              {/* ---- Main Content Display Area ---- */}
                              <Box >

                                    <Box display="flex" justifyContent="flex-end" alignItems="center" sx={{ p: "15px" }}>
                                          <SearchBox />
                                          <Button variant="outlined" sx={{ mx: 1, borderRadius: 1, textTransform: 'none' }}>
                                               <SortOutlinedIcon sx={{mr:1}}/> Filter
                                          </Button>
                                          <Button
                                                variant="contained"
                                                sx={{
                                                      bgcolor: 'primary.main',
                                                      '&:hover': { bgcolor: 'primary.dark' },
                                                      borderRadius: 1,
                                                      textTransform: 'none',
                                                }}
                                          >
                                              <AddOutlinedIcon sx={{mr:1}}/>  Create Appointment
                                          </Button>

                                    </Box>
                                    {/* main page Components */}
                                    <Box sx={{ p: "20px" }}>
                                          <AppointmentsPage />
                                    </Box>

                              </Box>
                        </Box>
                  </Box>
            </ThemeProvider>
      );
};
