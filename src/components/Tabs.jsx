import * as React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Tabs() {
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

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Honor and Awards" value="1" />
                        <Tab label="Works" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <CardContainer>
                        <Card>
                            <Title>
                                <img style={{ width: "32px", height: "32px", borderRadius: "50px" }} src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-realistic-trophy-gold-cup-png-image_3696414.jpg" alt="image" />
                                <h3>Honor And Awards</h3>
                            </Title>
                        </Card>
                        <Card>
                            <Title>
                                <img style={{ width: "32px", height: "32px", borderRadius: "50px" }} src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-realistic-trophy-gold-cup-png-image_3696414.jpg" alt="image" />
                                <h3>Honor And Awards</h3>
                            </Title>
                        </Card>
                        <Card>
                            <Title>
                                <img style={{ width: "32px", height: "32px", borderRadius: "50px" }} src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-realistic-trophy-gold-cup-png-image_3696414.jpg" alt="image" />
                                <h3>Honor And Awards</h3>
                            </Title>
                        </Card>
                    </CardContainer>

                </TabPanel>
                <TabPanel value="2">Works</TabPanel>
            </TabContext>
        </Box>
    );
}
