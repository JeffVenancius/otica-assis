import Banner from './Banner'
import Default from '../../components/Default'

const Bulget = (props) => {
	return (
		<Default
			cards={() => props.getCards("Bulget")}
		/>
	)
}

export default Bulget
