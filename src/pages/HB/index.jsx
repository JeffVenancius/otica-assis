import Banner from './Banner'
import Default from '../../components/Default'

const HB = (props) => {
	return (
		<Default
			cards={() => props.getCards("HB")}
		/>
	)
}

export default HB
