import './Pagination.css'

const Pagination = (props) => {
	const pagesToShow = Math.min(props.currPage + 2, props.pages)
	return (
		<div className="pagination">
			<div className="pagination__container">
			{props.currPage === 1 && <div className='empty__page'><span></span></div>}
			{props.currPage === 1 && <div className='empty__page'><span></span></div>}
			{props.currPage > 1 && <button onClick={() => props.changePage(1)}>&lt;&lt;</button>}
			{props.currPage > 1 && <button onClick={() => props.changePage(props.currPage - 1)}>&lt;</button>}
			<div>
				<span className="curr__page">{props.currPage}</span>
			</div>
			{props.currPage < props.pages && props.pages > 1 && <button onClick={() => props.changePage(props.currPage + 1)}>&gt;</button>}
			{props.currPage < props.pages && props.pages > 1 && <button onClick={() => props.changePage(props.pages)}>&gt;&gt;</button>}
			{props.currPage === props.pages && <div className='empty__page'><span></span></div>}
			{props.currPage === props.pages && <div className='empty__page'><span></span></div>}
			</div>
	</div>
	)
}

export default Pagination
