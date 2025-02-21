import Banner from './Banner'
import Default from '../../components/Default'

const OnDesign = (props) => {
	return (
		<Default
			cards={() => props.getCards("OnDesign")}
		/>
	)
}

export default OnDesign
