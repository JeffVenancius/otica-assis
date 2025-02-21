import DefaultBanner from '../../../components/DefaultBanner'

const Banner = (props) => {
	if (!props.custom) return <DefaultBanner />
	return <></>
}

export default Banner
