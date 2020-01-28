import React, {Component ,useState }  from 'react';
import Header from '../../template/Header';
import Stepper from './Stepper';
import {Avatar, Button, CssBaseline,TextField, FormControlLabel, MenuItem, Checkbox, InputLabel, Link, Grid, Box, Typography, Container} from '@material-ui/core'
import { useForm } from "react-hook-form";

import Radio from '@material-ui/core/Radio';
import clsx from 'clsx';
import RadioGroup from '@material-ui/core/RadioGroup';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
//import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';


class Index extends Component {
        render() {
            return(
                <div>
                    <Header></Header>
                    <Stepper/>
                </div>
            )
        }
}

export default Index;