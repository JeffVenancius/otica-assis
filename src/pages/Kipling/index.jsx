import Banner from './Banner'
import Default from '../../components/Default'

const Kipling = (props) => {
	return (
		<Default
			cards={() => props.getCards("Kipling")}
		/>
	)
}

export default Kipling
