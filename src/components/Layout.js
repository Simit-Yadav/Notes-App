import React from 'react';
import {Drawer, Typography, makeStyles} from '@material-ui/core';
import {List,ListItem,ListItemIcon,ListItemText, AppBar,Toolbar} from '@material-ui/core';
import {SubjectOutlined, AddCircleOutlined} from '@material-ui/icons'
import {useHistory, useLocation} from 'react-router-dom';
import {format} from 'date-fns';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
	return {
		page: {
			background: '#f9f9f9',
			width: '100%',
			padding: theme.spacing(3)
		},
		drawer: {
			width: drawerWidth,
		},
		drawerPaper: {
			width: drawerWidth,
		},
		root: {
			display: 'flex',
		},
		active: {
			background: '#f4f4f4',
		},
		title: {
			padding: theme.spacing(2),
		},
		appbar: {
			width: `calc(100% - ${drawerWidth}px)`
		},
		toolbar: theme.mixins.toolbar
	}
})

const Layout = ({children}) => {
	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();
	const menuItems = [
		{
			text: 'My Notes',
			icon: <SubjectOutlined color="primary"/>,
			path: '/'
		},
		{
			text: 'Create Note',
			icon: <AddCircleOutlined color="primary"/>,
			path: '/create'
		}
	]

	return (
		<div className={classes.root}>
			<AppBar className={classes.appbar} elevation={0}>
				<Toolbar>
					<Typography>
						Today is the {format(new Date(),'do MMMM Y')}
					</Typography>
				</Toolbar>
			</AppBar>

			<Drawer className={classes.drawer} variant="permanent" anchor="left" classes={ {paper: classes.drawerPaper}}>
				<div>
					<Typography variant="h5" className={classes.title}>
						Personal Notes
					</Typography>
				</div>

				<List>
					{menuItems.map(item => {
						return (
							<>
							<ListItem key={item.text} button onClick={() => history.push(item.path)} className={location.pathname === item.path ? classes.active : null}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text}/>
						</ListItem>
						</>
						)
					})}
				</List>
			</Drawer>

			<div className={classes.page}>
				<div className={classes.toolbar}></div>
				{children}
			</div>
		</div>
	)
}

export default Layout;