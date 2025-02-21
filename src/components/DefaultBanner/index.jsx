import bannersData from '../../data/banners.json'
import './DefaultBanner.css'
import { useEffect, useState } from 'react'


const DefaultBanner = () => {
	const [banners, setBanners] = useState({"pc": null, "mobile": null, "alt": ""})
	useEffect(() => {
		let currSelection = window.location.pathname.replace("/","")
		currSelection = currSelection ? currSelection : "Default"
		if (Object.keys(bannersData).includes(currSelection)) {
			setBanners(bannersData[currSelection])
		} else {
			setBanners(bannersData["Default"])
		}
	}, [])
	return (
		<>
			<img className="header__banner--pc" src={banners["pc"]} alt={banners["alt"]}/>
			<img className="header__banner--mobile" src={banners["mobile"]} alt={banners["alt"]}/>
		</>
	)
}

export default DefaultBanner


