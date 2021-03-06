import React, {useState} from 'react';
import { Typography, Button, Container } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { FormControlLabel, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {useHistory} from 'react-router-dom';
import data from './data'

const useStyles = makeStyles({
	field: {
		marginTop: 20,
		marginBottom: 20,
		display: "block"
	}
})

export default function Create(){
	const classes = useStyles();
	const [title, setTitle] = useState('');
	const history = useHistory();
	const [details, setDetails] = useState('');
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);
	const [category, setCategory] = useState('todos')
	

	const handleSubmit = (e) => {
		e.preventDefault();
		setTitleError(false)
		setDetailsError(false)

		if(title === ''){
			setTitleError(true)
		}

		if(details === ''){
			setDetailsError(true);
		}

		if(title && details){
			data.push({title,details,category,id: Math.round(Math.random() * 10)});
			history.push("/");
			console.log(title, details, category);
		}
	}


	return (
		<Container>
			<Typography 
			variant="h6"
			color="textSecondary"
			component="h2"
			gutterBottom
			>
				Create a new page
			</Typography>

			<form noValidate autoComplete="off" onSubmit={handleSubmit}>
				<TextField 
				onChange={(e) => setTitle(e.target.value)}
				className={classes.field}
				label="Note Title"
				variant="outlined"
				fullWidth
				required
				error={titleError}/>

				<TextField 
				onChange={(e) => setDetails(e.target.value)}
				className={classes.field}
				label="Details"
				variant="outlined"
				multiline
				rows={4}
				fullWidth
				required
				error={detailsError}/>

				<FormControl className={classes.field}>
					<FormLabel>Note Category</FormLabel>
					<RadioGroup value={category} onChange={(e) => setCategory(e.target.value)} >
						<FormControlLabel value="money" control={<Radio color="primary"/>} label="Money"/>
						<FormControlLabel value="todos" control={<Radio color="primary"/>} label="Todos"/>
						<FormControlLabel value="reminders" control={<Radio color="primary"/>} label="Reminders"/>
						<FormControlLabel value="work" control={<Radio color="primary"/>} label="Work"/>
					</RadioGroup>
				</FormControl>

				<Button 
				type="submit" 
				color="primary" 
				variant="contained"
				endIcon={<KeyboardArrowRightIcon/>}>
					Submit
				</Button>
			</form>			


			
		</Container>
	)
}

