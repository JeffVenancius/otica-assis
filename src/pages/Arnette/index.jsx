import Banner from './Banner'
import Default from '../../components/Default'

const Arnette = (props) => {
	return (
		<Default
			cards={() => props.getCards("Arnette")}
		/>
	)
}

export default Arnette
