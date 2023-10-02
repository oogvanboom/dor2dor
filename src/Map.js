import { useEffect } from "react";

const Map = () => {

	useEffect(() => {
		try {
			const mapSelector = '#map-body';
			const customMapStyle = {
            'elements': {
                'water': 		    { 'fillColor':   '#a1e0ff' },
                'waterPoint': 	 { 'iconColor':   '#a1e0ff' },
                'transportation': { 'strokeColor': '#aa6de0' },
                'road': 			 { 'fillColor':   '#b892db' },
                'railway': 		 { 'strokeColor': '#a495b2' },
                'structure': 		 { 'fillColor':   '#a02233' },
                'runway': 			 { 'fillColor':   '#ff7fed' },
                'area': 			 { 'fillColor':   '#f39ebd' },
                'political': { 
						                  'borderOutlineColor': 
												               '#55ffff', 
						                  'borderStrokeColor':  
												               '#fe6850', 
					},
                'point': { 
												'iconColor':   '#ff0000', 
												'fillColor':   '#FF2F30', 
												'strokeColor': '#DB4680' 
					 },
                'transit': { 'fillColor': '#AA6DE0' }
            },
            'version': '1.0' 
        };
			// eslint-disable-next-line no-undef
			let map = new Microsoft.Maps.Map(
				mapSelector,
				{ customMapStyle }
			);
		} catch (e) {

		}
	})
	return (
		<div 
			style={{
				background:'rgba(89,0,0,0.38)',
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				zIndex: '10',
			}}

		>
			<div 
				id="map-body"
			>
			</div>
		</div>
	)
}

export default Map;