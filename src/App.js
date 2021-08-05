import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Create from './components/Create';
import { createTheme, ThemeProvider} from '@material-ui/core';


const theme = createTheme({
	palette: {
		primary: {
			main: '#63ecbb'
		}
	},
	typography: {
		fontFamily: 'Quicksand',
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
		
	}
})

function App() {
  return (
	  <ThemeProvider theme={theme}>
		<Router>
			<Switch>
				<Route exact path="/">

				</Route>
				<Route path="/create">
					<Create/>
				</Route>
			</Switch>
		</Router>
	  </ThemeProvider>
  );
}

export default App;
