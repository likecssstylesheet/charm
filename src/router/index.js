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
import produceDetail from '../views/produceDetail'
import Brand from '../views/brand'
import {Provider} from 'react-redux'
import store from '../store/index.js'
import Gift from '../views/gift'
import Inputfind from '../views/input'
import Trademark from '../views/trademark'
import ProductMini from '../views/productmini'
import DetailName from '../views/detailName'
const router = (
	<Provider store={store}>
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
					<Route path="/gift" component={Gift}></Route>
					<Route path="/trademark" component={Trademark}></Route>
					<Route path="/input" component={Inputfind}></Route>
					<Route path="/detailName/:id" component={DetailName}></Route>
					<Route path="/productdetail/:data" component={produceDetail}></Route>
					<Route path="/brand/:id" component={Brand}></Route>
					<Route path="/productmini/:id" component={ProductMini}></Route>

					<Redirect from="*" to="/index"/>
					</Switch>
				</App>

		</Router>
	</Provider>
)

export default router