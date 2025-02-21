import Banner from './Banner'
import Default from '../../components/Default'

const Oslo = (props) => {
	return (
		<Default
			cards={() => props.getCards("Oslo")}
		/>
	)
}

export default Oslo
