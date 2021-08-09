import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Create from './components/Create';
import Notes from './components/Notes'
import { createTheme, ThemeProvider} from '@material-ui/core';
import Layout from './components/Layout';



const theme = createTheme({
	palette: {
		primary: {
			main: '#f8bd3b'
		}
	},
	typography: {
		fontFamily: 'Quicksand',
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
		
	},
})

function App() {
  return (
	  <ThemeProvider theme={theme}>
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/">
						<Notes/>
					</Route>
					<Route path="/create">
						<Create/>
					</Route>
				</Switch>
			</Layout>
		</Router>
	  </ThemeProvider>
  );
}

export default App;
