import Banner from './Banner'
import Default from '../../components/Default'

const LentesCosmeticas = (props) => {
	return (
		<Default
			cards={() => props.getCards("LentesCosmeticas")}
		/>
	)
}

export default LentesCosmeticas
