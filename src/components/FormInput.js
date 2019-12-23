import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SendMessage } from '../svg/sendMessage.svg';
import { ReactComponent as ImgAttach } from '../svg/imgAttach.svg';
import { ReactComponent as GeoAttach } from '../svg/geolocation.svg';
import { ReactComponent as MicOn } from '../svg/microphoneON.svg';
import { ReactComponent as MicOff } from '../svg/microphoneOFF.svg';
import styles from '../styles/FormInputStyles.module.css';

export default function FormInput(props) {
	const img = React.createRef();
	return (
		<form className={styles.inp} onSubmit={props.onSubmit}>
			<input
				className={styles.input}
				type="text"
				value={props.value}
				placeholder={props.placeholder}
				onChange={props.onChange}
			/>
			<button type="button" id="start" className={styles.attach} onClick={props.voiceAttach}>
				<MicOn className={styles.mic} />
			</button>
			<button type="button" id="stop" className={styles.attach} style={{ display: 'none' }}>
				<MicOff className={styles.mic} />
			</button>
			<button
				type="button"
				className={styles.attach}
				onClick={(e) => {
					if (img) {
						img.current.click();
					}
				}}>
				<ImgAttach className={styles.image} />
			</button>
			<input
				type="file"
				ref={img}
				multiple
				accept="image/*"
				style={{ display: 'none' }}
				onChange={props.imgAttach}
			/>
			<button type="button" className={styles.attach} onClick={props.geoAttach}>
				<GeoAttach className={styles.geo} />
			</button>
			<button type="button" className={styles.button} onClick={props.onSubmit}>
				<SendMessage className={styles.sendMessage} />
			</button>
		</form>
	);
}

FormInput.propTypes = {
	voiceAttach: PropTypes.func.isRequired,
	imgAttach: PropTypes.func.isRequired,
	geoAttach: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
};
