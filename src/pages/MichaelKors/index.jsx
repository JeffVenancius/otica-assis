import Banner from './Banner'
import Default from '../../components/Default'

const MichaelKors = (props) => {
	return (
		<Default
			cards={() => props.getCards("MichaelKors")}
		/>
	)
}

export default MichaelKors
