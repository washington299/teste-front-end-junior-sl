import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

type Props = {
	width: number | string;
	height: number | string;
	lat: number;
	lng: number;
	description: string;
};

const Map = ({ width, height, lat, lng, description }: Props) => {
	return (
		<MapContainer center={[lat, lng]} zoom={6} style={{ width, height }}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[lat, lng]}>
				<Popup>{description}</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;
