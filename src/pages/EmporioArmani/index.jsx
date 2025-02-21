import Banner from './Banner'
import Default from '../../components/Default'

const EmporioArmani = (props) => {
	return (
		<Default
			cards={() => props.getCards("EmporioArmani")}
		/>
	)
}

export default EmporioArmani
