import Banner from './Banner'
import Default from '../../components/Default'

const VictorHugo = (props) => {
	return (
		<Default
			cards={() => props.getCards("VictorHugo")}
		/>
	)
}

export default VictorHugo
