import { defaultTheme } from 'react-admin';
import deepPurple from '@mui/material/colors/deepPurple';
import blue from '@mui/material/colors/blue';
import red from '@mui/material/colors/red';

const darkTheme = {
    ...defaultTheme,
    palette: {
        primary: blue,
        secondary: deepPurple,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        fontFamily: ['Source Code Pro'].join(','),
    },
};

export default darkTheme;