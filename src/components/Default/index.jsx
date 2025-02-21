import urls from '../../data/urls.json'
import Card from '../Card'
import Pagination from '../Pagination'
import { useOutletContext } from 'react-router'
import { useState, useEffect, useRef } from 'react'
import './Default.css'

const Default = (props) => {
	const topRef = useRef()
	const context = useOutletContext()
	const [page, setPage] = useState(1)
	const [totalItems, setTotalItems] = useState([])
	const [order, setOrder] = useState("")
	const [selection, setSelection] = useState(props.customSelection ? props.customSelection : "")
	const itemsPerPage = 6

	useEffect(() => {
		let currSelection = window.location.pathname.replace("/","")
		currSelection = currSelection ? currSelection : "default"
		import('../../data/items/' + currSelection + '.json')
			.then(items => {
				for (let i = 0; i < Object.keys(urls).length; i++) {
					if (urls[Object.keys(urls)[i]] === currSelection) {
						currSelection = Object.keys(urls)[i]
						if (!selection) setSelection(currSelection)
					} 
				}
				let currCards = []

				const keys = Object.keys(items)
				for (let i = 0; i < keys.length; i++) {
					const key = keys[i]
					let tipo = false
					let genero = false
					const filtersKeys = Object.keys(context.currFilters)
					if (filtersKeys.includes("Tipo")) {
						if (items[key]["Tipo"] === context.currFilters["Tipo"] || context.currFilters["Tipo"] === "Todos") {
							tipo = true
						}
					} else {
						tipo = true
					}
					if (filtersKeys.includes("Gênero")) {
						if (items[key]["Gênero"] === context.currFilters["Gênero"] || context.currFilters["Gênero"] === "Todos") {
							genero = true
						}
					} else {
						genero = true
					}
					if (tipo && genero) {
						// console.log(typeof items[key][Object.keys(items[key])[0]] === 'object')
						if (typeof items[key][Object.keys(items[key])[0]] !== 'object') {
							currCards.push(items[key])
						}
					} 
				}
				setTotalItems(currCards)
			})
	}, [])

	const changePage = (nextPage) => {
		setPage(nextPage)
	}

	useEffect(() => topRef.current?.scrollIntoView({behavior: 'smooth'}),[page])

	const changeOrder = (e) => setOrder(e.target.value)

	const startPg = Math.max(0, (page - 1) * itemsPerPage)
	const endPg = Math.min(totalItems.length, startPg + itemsPerPage)

	useEffect(() => {
	const getSortedItems = () => {
        console.log(totalItems.sort((a,b) => a["preco"] > b["preco"]) === totalItems.sort((a,b) => a["preco"] < b["preco"]))
		if (order === "Menor Preço") return totalItems.sort((a,b) => a["preco"] > b["preco"])
		if (order === "Maior Preço") return totalItems.sort((a,b) => a["preco"] < b["preco"])
		return totalItems
	}
	setTotalItems(getSortedItems())
	setPage(1)
	},[order])
	

	if (!totalItems.length) {
		return (
			<></>
		)
	}
	return (
		<>
		<div className='title__cards' ref={topRef}>
			<h1>{selection}</h1>
			<h2>{context.currFilters["Gênero"]}</h2>
			<h2>{context.currFilters["Tipo"]}</h2>
		</div>
		<div className='order__container'>
			<select name="Ordem" onChange={changeOrder}>
				<option value="Ordem">Ordem</option>
				<option value="Menor Preço">Menor Preço</option>
				<option value="Maior Preço">Maior Preço</option>
			</select>
		</div>
		<div className="cards__container">
		{totalItems.slice(startPg, endPg).map(e => {
			return (
				<Card 
					key={"card__" + e["modelo"]}
					marca={e["marca"]} 
					tipoDeCard={e["tipoDeCard"]} 
					modelo={e["modelo"]} 
					imgs={e["imgs"]} 
					preco={e["preco"]} 
					precoPromo={e["precoPromo"]} 
					wppDesc={e["wppDesc"]}
				/>
		)})}
		</div>
		<Pagination 
		changePage={changePage}
		currPage={page}
		pages={Math.ceil(totalItems.length / itemsPerPage)}
		/>
		</>
	)
}

export default Default


