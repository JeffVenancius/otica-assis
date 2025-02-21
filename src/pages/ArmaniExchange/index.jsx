import Banner from './Banner'
import Default from '../../components/Default'

const ArmaniExchange = (props) => {
	return (
		<Default
			cards={() => props.getCards("ArmaniExchange")}
		/>
	)
}

export default ArmaniExchange
