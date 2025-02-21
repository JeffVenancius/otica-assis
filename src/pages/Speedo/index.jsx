import Banner from './Banner'
import Default from '../../components/Default'

const Speedo = (props) => {
	return (
		<Default
			cards={() => props.getCards("Speedo")}
		/>
	)
}

export default Speedo
