import React from 'react'
import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect
}from 'react-router-dom'
import App from '../App.js'
import Index from '../views/indexf'
import Crossborder from '../views/crossborder'
import Women from '../views/women'
import Men from '../views/men'
import Cosmetics from '../views/cosmetics'
import Lifestyle from '../views/lifestyle'
import Kids from '../views/kids'
import Upcoming from '../views/upcoming'


const router = (
	<Router>
			<App>
				<Switch>
				<Route path="/index" component={Index}></Route>
				<Route path="/crossborder" component={Crossborder}></Route>
				<Route path="/women" component={Women}></Route>
				<Route path="/men" component={Men}></Route>
				<Route path="/cosmetics" component={Cosmetics}></Route>
				<Route path="/lifestyle" component={Lifestyle}></Route>
				<Route path="/kids" component={Kids}></Route>
				<Route path="/upcoming" component={Upcoming}></Route>
				<Redirect from="*"  to="/index"/>
				</Switch>
			</App>

	</Router>

)

export default router