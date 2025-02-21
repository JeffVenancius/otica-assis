import { useEffect, useState } from "react"
import './Card.css'
import WppBtn from '../WppButton'

const ImgCarousel = (props) => {
	if (props.imgs) {
		if (props.imgs.length > 1) {
			return (
				<div className="card__img__colection">
					{props.imgs.map(e => <img style={{translate: `${-100 * props.currImg}%`}} alt={props.modelo} className="card__image__custom" src={e} loading="lazy" key={e}/>)}
				</div>
			)
		} else {
			return <img alt={props.modelo} className="card__image__custom" src={props.imgs[0]} loading="lazy"/>
		}
	}
}
const ImgContainer = (props) => {
	if (props.tipoDeCard === "Com Preço Promocional") {
		return (
		<div className="promoContainer">
			<ImgCarousel 
				tipoDeCard={props.tipoDeCard} 
				img={props?.imgs} 
				currImg={props.currImg} 
				delay={props.delay} 
				discount={props.discount}
				modelo={props.modelo}
			/>
		</div>
		)
	}
	return (
		<ImgCarousel
				tipoDeCard={props.tipoDeCard} 
				imgs={props?.imgs} 
				currImg={props.currImg} 
				delay={props.delay} 
				discount={props.discount}
		/>
	)
}



const Card = (props) => {
	const [currImg, setCurrImg] = useState(0)
	let wppMsg = encodeURI("Olá! Me interessei pelo " + props.marca + ", " + props.modelo + "." + props.wppDesc)
	if (!props.modelo) {
		wppMsg = encodeURI("Olá! Me interessei pelo " + props.marca + ", " + props.wppDesc)
	}

	useEffect(() => {
		if (!props.imgs) {
			return
		}
		if (props.imgs.length === 1) return
		const timedOut = setTimeout(() => {setCurrImg(currImg === props.imgs.length - 1 ? 0 : currImg + 1)}, 4000)
		return () => clearTimeout(timedOut)
	},[currImg])


	if (props.tipoDeCard === "Com Preço" || props.tipoDeCard === "Com Preço Promocional") {
		let formater = new Intl.NumberFormat('pt-BR', {
			style: "currency",
			currency: "BRL",
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		})
		let times = 1
		while (props.preco/times > 60 || times === 12) { // 60 é o valor minimo da parcela
			times++
		}
		while (props.preco/times < 60) {
			times--
		}
		let precoFormatado = formater.format(props.preco/times)
		let price_option1 = times === 1 ? precoFormatado + " à vista" : times + "x de " + precoFormatado + " sem juros"
		let price_option2 =  times === 1 ? "" : "ou " + formater.format(props.preco) + " à vista"
	return (
		<div className="card__custom">
			<ImgContainer tipoDeCard={props.tipoDeCard} imgs={props?.imgs} currImg={currImg} delay={props.delay} discount={props.discount}/>
			<div className="card--description">
	  			<div className="card__description-model">
				<h2 >{props.marca}</h2>
				<h2>{props.modelo}</h2>
	  			</div>
				<div className="card__description_price_container">
					<h3 className="card--description--price"> <span className="compare"></span>{price_option1}</h3>
					<p className="card--description--price"> {price_option2}</p>
				</div>
				<WppBtn
					mensagem={wppMsg}
					texto="Eu quero!"
				/>
			</div>
    </div>
  );
	}
	return (
		<div className="card__custom">
			<ImgContainer imgs={props?.imgs} currImg={currImg} delay={props.delay} discount={props.discount}/>
			<div className="card--description">
	  			<div className="card__description-model">
				<h2 >{props.marca}</h2>
				<h2>{props.modelo}</h2>
	  			</div>
				<WppBtn
					mensagem={wppMsg}
					texto="Eu quero!"
				/>
			</div>
    </div>
  );
}

export default Card
