import React, { useState } from 'react';
import { Tabs, Tab, Box, AppBar } from '@mui/material';
import Home from './pages/Home';
import './App.css';
import RegistrationPage from './pages/RegistrationPage';
// import AgendaPage from './pages/AgendaPage';
import FAQs from './pages/FAQs';
import SponsorsPage from './pages/Sponsers';
import PastEvents from './pages/PastEvents';
import SponsersRegistration from './pages/SponsersRegistration';

// TabPanel component to display content for each tab
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

// Accessibility props for tabs
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" color="default">
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="navigation tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Registration" {...a11yProps(1)} />
          <Tab label="Agenda" {...a11yProps(2)} />
          <Tab label="FAQs" {...a11yProps(3)} />
          <Tab label="Sponsors" {...a11yProps(4)} />
          <Tab label="Past Events" {...a11yProps(5)} />
          <Tab label="Sponsor Registration" {...a11yProps(6)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RegistrationPage />
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        <AgendaPage />
      </TabPanel> */}
      <TabPanel value={value} index={3}>
        <FAQs />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SponsorsPage />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <PastEvents />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <SponsersRegistration />
      </TabPanel>
    </>
  );
}

export default App;