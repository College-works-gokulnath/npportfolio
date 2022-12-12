import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Scijournala from './Scijournala';
import Ugcjournaal from './Ugcjournaal';
import {SCI,UGC}from '../../data'
import Scops from './Scops';
import InterNationalpaper from './InterNationalpaper';
function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: '#ffffff', width:'100%' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          sx={{width:'100%',background:'#000000'}}
          variant="fullWidth"
          aria-label="full width tabs example"
          TabIndicatorProps={{style:{background:'#a5d5ff',fontWeight:'bold'}}} 
          
        >
          <Tab label={`SCI	Journals (${SCI.length})`} {...a11yProps(0)} />
          <Tab label={`UGC 	Journals (${UGC.length})`} {...a11yProps(1)} />
          <Tab label="SCOPUS Indexed (Journal papers +Conference Papers +Book Chapters)" {...a11yProps(2)} />
          <Tab label="Other International Research Publications	" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}

        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Scijournala/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
<Ugcjournaal/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Scops/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <InterNationalpaper/>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}