import React from 'react';
import Image from './Image';

const ImagesList = props => {
	const results = props.data;
	let images;
	if (results.length > 0) {
		images = results.map(img => <Image url={img.urls.small} key={img.id} />);
	} else {
		images = <p>No images found. Please try again.</p>;
	}
	return (
		<ul className="img-list">
			{images}
		</ul>
	);
};

export default ImagesList;