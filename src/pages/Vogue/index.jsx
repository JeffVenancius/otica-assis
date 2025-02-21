import Banner from './Banner'
import Default from '../../components/Default'

const Vogue = (props) => {
	return (
		<Default
			cards={() => props.getCards("Vogue")}
		/>
	)
}

export default Vogue
