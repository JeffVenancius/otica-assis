import './HeaderOptions.css'
import HeaderOption from './HeaderOption'
import urls from "../../../data/urls.json"
import { useEffect, useRef, useLayoutEffect, useState } from 'react';

function useOutsideAlerter(ref, changeActive, size) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && size > 480) {
				changeActive(null)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, size]);
}


const HeaderOptions = (props) => {
	const [size, setSize] = useState([0, 0]);
	const wrapperRef = useRef(null)
	useOutsideAlerter(wrapperRef, props.changeActive, size)

	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	const getTitle = () => {
		if (props.type === "Seleções" && props.title !== "/") {
			let keys = Object.keys(urls)
			for(let i = 0; i < keys.length ;i++) {
				if (urls[keys[i]] === props.title.replace("/","")) {
					return keys[i]
				}
			}
		}
		if (props.type in props.currFilters) {
			return props.currFilters[props.type]
		}
		return props.type
	}
	const active = props.active === props.type ? " header__options--first--active" : ""
	const boxSize = props.options.filter(e=> props.possibleFilters.includes(e)).length

	return (
		<div className={'header__options' + active}>
		<button ref={wrapperRef} className="header__buttons header__buttons--first" onClick={() => props.changeActive(props.type)}>{getTitle()}</button>
		<div className={'header__options--container' + ' header__options--container--size--' + Math.max(boxSize, 2)} >
			<HeaderOption setFilters={props.setFilters} type={props.type} value="Todos">"Todos"</HeaderOption>
			{props.options.filter(e => props.possibleFilters.includes(e)).sort().map(e => <HeaderOption setFilters={props.setFilters} type={props.type} value={e} key={e + "__option"} url={urls[e]}>{e}</HeaderOption>)}
		</div>
		</div>
	)
}

export default HeaderOptions
