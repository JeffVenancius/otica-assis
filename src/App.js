import './App.css';

import Header from './components/Header';
import DefaultBanner from './components/DefaultBanner';
import Footer from './components/Footer';
import ScrollToTop from './components/scrollToTop.jsx'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react';
import optionsData from './data/types.json'

import urls from './data/urls.json'

function App() {
	const [currFilters, changeCurrFilters] = useState({})
	const [possibleFilters, setPossibleFilters] = useState([])

	useEffect(() => {
		let currSelection = window.location.pathname.replace("/","")
		currSelection = currSelection ? currSelection : "default"
		import('./data/items/' + currSelection + '.json')
			.then(res => {
				let possibleFiltersOut = [...Object.keys(urls)]
				Object.keys(res).forEach(item_key => {
					const item = res[item_key]
					const filters = ["Tipo", "Gênero"]
					filters.forEach(type => {
						if (!possibleFilters.includes(item[type])) {
							possibleFiltersOut.push(item[type])
						}
					})
				})
				setPossibleFilters(possibleFiltersOut)
			})
	},[])

	const setFilters = (filter, type) => {
		let newFilter = JSON.parse(JSON.stringify(currFilters))
		if (filter === "Todos") {
			delete newFilter[type]
		} else {
			newFilter[type] = filter
		}
		changeCurrFilters(newFilter)
	}

  return (
		<>
		<ScrollToTop />
		<Header 
			headerLogo="./assets/Logotipo-Ótica-Assis-header.png"
			headerAlt="Logo Ótica Assis"
			setFilters={setFilters}
			currFilters={currFilters}
			possibleFilters={possibleFilters}
		>
		<DefaultBanner/>
		</Header>
		<Outlet
			context={{currFilters}}
		/>
		<Footer
			facebookLogo="./assets/fb_logo.png"
			instagramLogo="./assets/insta_logo.png"
			companyLogo="./assets/Logotipo-Ótica-Assis-footer.png"
		/>
		</>
  );
}

export default App;
