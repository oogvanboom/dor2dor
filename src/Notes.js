


const Notes = () => {
	return (
		<div
			className="Notes"
			style={{
				position: 'absolute',
				top: 'calc(50vh + 60pt)',
				left: '0',
				background: 'rgba(60,10,0,0.38)',
				zIndex: '9999',
				width: '100vw',
				height: 'calc(50vh - 60pt)',
			}}
		>
			<header>
				Notes
				{/* <Header/> */}
			</header>
			<input type="text" placeholder="name" />
			{/* <MapBody/> */}
		</div>
	);
};

export default Notes;