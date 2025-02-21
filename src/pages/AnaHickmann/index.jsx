import Banner from './Banner'
import Default from '../../components/Default'

const AnaHickmann = (props) => {
	return (
		<Default
			cards={() => props.getCards("AnaHickmann")}
		/>
	)
}

export default AnaHickmann
