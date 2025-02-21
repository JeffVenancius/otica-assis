import Banner from './Banner'
import Default from '../../components/Default'

const P12 = (props) => {
	return (
		<Default
			cards={() => props.getCards("P12")}
		/>
	)
}

export default P12
