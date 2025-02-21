import Banner from './Banner'
import Default from '../../components/Default'

const HarleyDavidson = (props) => {
	return (
		<Default
			cards={() => props.getCards("HarleyDavidson")}
		/>
	)
}

export default HarleyDavidson
