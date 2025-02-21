import Banner from './Banner'
import Default from '../../components/Default'

const Baratinhos = (props) => {
	return (
		<Default
			cards={() => props.getCards("Baratinhos")}
		/>
	)
}

export default Baratinhos
