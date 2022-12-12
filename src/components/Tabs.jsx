import * as React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import {makeStyles} from '@mui/material/styles';
import {styled as st }from '@mui/material/styles';
import {AchievementsandAwards} from '../data'

const color = red[500];


const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ffffff',
        main: '#ffffff',
        dark: '#f5f5f5',
        contrastText: '#ffffff',
      },
    },
  });
  
export default function Tabs() {
    const useStyles = st(theme => ({
        customTabRoot: {
            color: "red",
            backgroundColor: "green"
        },
        customTabIndicator: {
            backgroundColor: "orange"
        }
      }));
      
      const classes = useStyles();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    

`
    const Card = styled.div`
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.91);
    box-shadow: 0px 4px 120px rgba(0, 0, 0, 0.25);  
    padding: 1.5rem;
`
    const Title = styled.div`
   display: flex;
   gap: .5rem;
    align-items: center;
`
const styles = {
	tab: {
		padding: '2px 34px',
		width: '140px',
		height: '72px',
		color: '#fa0d0d'
	},
	tabItemContainer: {
		background: 'none'
	}
}


    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                    <TabList  textColor='inherit'
       TabIndicatorProps={{style:{background:'#a5d5ff',fontWeight:'bold'}}} onChange={handleChange} aria-label="lab API tabs example">
                        <Tab  sx={{color:"black"}} label="Achievements and Awards " value="1" />
                        <Tab sx={{color:"black"}} label="Works" value="2" />
                    </TabList>
                </Box>
                <TabPanel sx={{
                    padding:'20px',

                    height:'57vh',
                    overflow:'scroll',
                    borderRadius:'0  0 20px 20px',
                    boxShadow:'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;'
                }} value="1">
                    <CardContainer>
                        {
                            AchievementsandAwards.map(data=>{
return         <Card>
<Title>
    <img style={{ width: "32px", height: "32px", borderRadius: "50px" }} src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-realistic-trophy-gold-cup-png-image_3696414.jpg" alt="image" />
    <h3>{data.name}</h3>
</Title>
</Card>
                            })
                        }

                    </CardContainer>

                </TabPanel>
                <TabPanel value="2">Works</TabPanel>
            </TabContext>
        </Box>
    );
}
