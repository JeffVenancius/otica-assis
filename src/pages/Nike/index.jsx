import Banner from './Banner'
import Default from '../../components/Default'

const Nike = (props) => {
	return (
		<Default
			cards={() => props.getCards("Nike")}
		/>
	)
}

export default Nike
