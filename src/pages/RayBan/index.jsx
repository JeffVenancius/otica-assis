import Banner from './Banner'
import Default from '../../components/Default'

const RayBan = (props) => {
	return (
		<Default
			cards={() => props.getCards("RayBan")}
		/>
	)
}

export default RayBan
