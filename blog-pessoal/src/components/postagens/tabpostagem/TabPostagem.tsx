import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';

function TabPostagem() {

    const [value, setValue] = useState('1')

    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    
        setValue(newValue);
    }

    return (
        <>
            <TabContext value={value}>

                <AppBar position="static">
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align='center' className='titulo'>Sobre-nós</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam natus in et, ex totam nostrum aperiam, placeat obcaecati excepturi repudiandae quisquam neque? Sequi, nihil? Corporis consectetur maiores inventore aperiam sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste distinctio necessitatibus ullam beatae ut sapiente atque tempora officia, rerum placeat dignissimos aliquid dolore tempore nisi soluta. Error dolore pariatur perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus porro modi veritatis optio. Doloremque, dolorem sit exercitationem ducimus voluptatibus veniam vitae, quas tempora eius dolores, accusamus nulla culpa dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aperiam ad voluptate illum provident cumque enim reiciendis nemo, blanditiis cum dignissimos itaque atque similique porro quo nesciunt magnam praesentium. Cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsa quaerat atque animi consequuntur et sapiente repellendus officiis assumenda maxime sed facere autem molestiae quidem itaque minima alias, rerum ab!</Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}

export default TabPostagem;