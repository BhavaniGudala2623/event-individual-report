import React from 'react';
import { useState } from 'react';
import { Button, Grid, CssBaseline, AppBar, Toolbar, Typography, Box, TextField } from '@mui/material';
import Home from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Section } from './Dropdown';

export default function EventIndividualReport() {
    const [currency, setCurrency] = useState('');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar >
                        <Box sx={{ width: '100%', maxWidth: 300 }}>

                            <Typography variant='h6' gutterBottom component="div"><Home color="black" /><KeyboardArrowRightIcon />Reports</Typography>
                            <Typography variant="h6" gutterBottom component="div">Event Individual Report</Typography>
                        </Box>
                    </Toolbar>
                </AppBar>

                <Box sx={{ display: 'flex', p: 1, m: 1, bgcolor: 'background.paper', flexDirection: 'row', }}>
                </Box>
                <Grid container direction="row" justifyContent="center" alignContent="center" >
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        required label="Sections:"
                        value={currency}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                    >
                        {Section.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>

                    <TextField
                        id="outlined-select-currency-native"
                        select
                        required label="Sub Station:"
                        value={currency}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                    >
                    </TextField>

                    <TextField
                        id="outlined-select-currency-native"
                        select
                        required label="Feeder:"
                        value={currency}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                    >
                    </TextField>
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        required label="DTR:"
                        value={currency}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                    >
                    </TextField>

                    <TextField id="outlined-basic" label="METER" variant="outlined" />
                </Grid>



                <Grid container direction="row" justifyContent="center" alignContent="center" >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="h6" display="inline">
                            If you already know the meter number, please enter here :</Typography>
                        <TextField />
                    </div>
                </Grid>


                <Grid container direction="row" justifyContent="center" alignContent="center" rowSpacing={12} columnSpacing={2}>
                    <Grid item xs={2}>
                        <Typography>From date </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <BasicDatePicker />  </Grid>
                    <Grid item xs={2}>
                        <Typography>End date </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <BasicDatePicker /> </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="center" alignContent="center" rowSpacing={12} columnSpacing={2}>
                    <Grid item xs={1}>
                        <Button type="submit"
                            variant="contained"
                            color="inherit"
                        >Submit</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="inherit"
                        >Clear</Button>
                    </Grid>
                </Grid>

            </Box>

        </>
    );
}



