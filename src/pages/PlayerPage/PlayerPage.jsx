import React from 'react';
import { useParams } from 'react-router-dom';
import FILMS from '../../FILMS.json';

function PlayerPage() {
	window.scrollTo(0, 0);
	const { filmId } = useParams();
	return (
		<iframe
			style={{ width: '90%', height: '600px', marginTop: '100px' }}
			src={FILMS[filmId - 1].videoUrl.replace(/watch\?v\=/g, 'embed/')}
			title={FILMS[filmId - 1].name}
			allow='accelerometer; autoplay; clipboard-write;  gyroscope; picture-in-picture; web-share'></iframe>
	);
}

export default PlayerPage;
