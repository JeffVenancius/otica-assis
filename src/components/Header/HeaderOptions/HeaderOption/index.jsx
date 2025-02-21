const HeaderOption = (props) => {
	if (props.type === "Seleções") return <a href={props.url ? props.url : "."}><button className="header__buttons" onClick={props.changeUrl}>{props.value}</button></a>
		return <button className="header__buttons" onClick={()=> props.setFilters(props.value, props.type)}>{props.value}</button>
}

export default HeaderOption
