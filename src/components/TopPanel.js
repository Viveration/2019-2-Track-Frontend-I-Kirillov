import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/TopPanelStyles.module.css';

export default function TopPanel(props) {
	const display = [{ display: 'none' }, { display: 'flex' }];
	return (
		<div className={styles.panel}>
			<div className={styles.contactsHead} style={display[(props.isChatOpen + 1) % 2]}>
				<button type="button" className={`${styles.contactsButton}`} onClick={props.showFunc}>
					<svg x="0px" y="0px" viewBox="0 0 60.123 60.123">
						<g fill="#FFFFFF">
							<path d="M57.124,51.893H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,51.893,57.124,51.893z" />
							<path
								d="M57.124,33.062H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3
								C60.124,31.719,58.781,33.062,57.124,33.062z"
							/>
							<path d="M57.124,14.231H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,14.231,57.124,14.231z" />
							<circle cx="4.029" cy="11.463" r="4.029" />
							<circle cx="4.029" cy="30.062" r="4.029" />
							<circle cx="4.029" cy="48.661" r="4.029" />
						</g>
					</svg>
				</button>
				<div className={styles.logo}>Messenger</div>
				<div className={styles.searchButton}>
					<svg viewBox="0 0 512 512" width="30px" height="30px">
						<g>
							<path
								d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5  
								S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9     
								C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"
								data-original="#000000"
								data-old_color="#000000"
								fill="#FFFFFF"
							/>
						</g>
					</svg>
				</div>
			</div>

			<div className={styles.chatHead} style={display[props.isChatOpen]}>
				<button type="button" className={`${styles.contactsButton}`} onClick={props.showFunc}>
					<svg x="0px" y="0px" viewBox="0 0 60.123 60.123">
						<g fill="#FFFFFF">
							<path d="M57.124,51.893H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,51.893,57.124,51.893z" />
							<path
								d="M57.124,33.062H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3
								C60.124,31.719,58.781,33.062,57.124,33.062z"
							/>
							<path d="M57.124,14.231H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,14.231,57.124,14.231z" />
							<circle cx="4.029" cy="11.463" r="4.029" />
							<circle cx="4.029" cy="30.062" r="4.029" />
							<circle cx="4.029" cy="48.661" r="4.029" />
						</g>
					</svg>
				</button>
				<div className={styles.profileAvatar}>
					<svg x="0px" y="0px" viewBox="0 0 1000 1000" width="46px" heigth="46px">
						<g fill="#8E24AA">
							<path d="M500,8.8C229.4,8.8,10,228.7,10,500c0,271.3,219.4,491.2,490,491.2c270.6,0,490-219.9,490-491.2C990,228.7,770.6,8.8,500,8.8z M794.8,767.5c-57.7-28-36.5-6.1-111.9-37.2c-77.2-31.8-95.5-42.2-95.5-42.2l-0.7-72.9c0,0,28.9-21.8,37.9-90.8c18,5.2,24.2-21.1,25.1-37.8c1.1-16.2,10.7-66.7-11.4-62.2c4.5-33.7,8.1-64.2,6.5-80.4c-5.5-56.6-44.9-115.8-144.3-120.1c-84.5,4.3-139.3,63.5-144.8,120.2c-1.6,16.1,1.7,46.6,6.2,80.4c-22.1-4.6-12.6,46-11.6,62.2c1.1,16.8,7,43.1,25.1,37.9c9,69,37.9,91,37.9,91l-0.7,73.3c0,0-18.3,11.1-95.5,42.9c-75.4,31.1-54.3,7.9-111.9,35.8c-64-70.8-103.3-164.5-103.3-267.5c0-220.4,178.2-399.1,398.1-399.1c219.9,0,398.1,178.7,398.1,399.1C898.1,603.1,858.8,696.7,794.8,767.5z" />
						</g>
					</svg>
				</div>
				<div className={styles.profileInformation}>
					<div className={styles.profileName}>{props.contact}</div>
					<div className={styles.profileActivity}>Был 228 минут назад</div>
				</div>
				<div className={styles.menuButton}>
					<svg x="0px" y="0px" viewBox="0 0 512 512">
						<g fill="#FFFFFF">
							<g>
								<g>
									<path
										d="M256,170.667c-47.063,0-85.333,38.281-85.333,85.333s38.271,85.333,85.333,85.333s85.333-38.281,85.333-85.333
										S303.063,170.667,256,170.667z M256,320c-35.292,0-64-28.708-64-64s28.708-64,64-64s64,28.708,64,64S291.292,320,256,320z"
									/>
									<path
										d="M418.583,213.656l-34.104-8.531c-0.542-1.354-1.083-2.688-1.646-4.021l18.083-30.125
										c2.521-4.198,1.854-9.573-1.604-13.031l-45.271-45.26c-3.479-3.479-8.854-4.115-13.042-1.604l-30.104,18.083
										c-1.333-0.563-2.667-1.104-4.021-1.635l-8.521-34.115c-1.188-4.75-5.458-8.083-10.354-8.083h-64
										c-4.896,0-9.167,3.333-10.354,8.083l-8.521,34.115c-1.354,0.531-2.688,1.073-4.021,1.635L171,111.083
										c-4.188-2.51-9.563-1.875-13.042,1.604l-45.271,45.26c-3.458,3.458-4.125,8.833-1.604,13.031l18.083,30.125
										c-0.563,1.333-1.104,2.667-1.646,4.021l-34.104,8.531c-4.75,1.177-8.083,5.448-8.083,10.344v64c0,4.896,3.333,9.167,8.083,10.344
										l34.104,8.531c0.542,1.354,1.083,2.688,1.646,4.021l-18.083,30.125c-2.521,4.198-1.854,9.573,1.604,13.031l45.271,45.25
										c3.479,3.49,8.875,4.104,13.021,1.604l30.125-18.073c1.333,0.563,2.667,1.104,4.021,1.635l8.521,34.115
										c1.188,4.75,5.458,8.083,10.354,8.083h64c4.896,0,9.167-3.333,10.354-8.083l8.521-34.115c1.354-0.531,2.688-1.073,4.021-1.635
										l30.125,18.073c4.125,2.5,9.542,1.885,13.021-1.604l45.271-45.25c3.458-3.458,4.125-8.833,1.604-13.031l-18.083-30.125
										c0.563-1.333,1.104-2.667,1.646-4.021l34.104-8.531c4.75-1.177,8.083-5.448,8.083-10.344v-64
										C426.667,219.104,423.333,214.833,418.583,213.656z M405.333,279.667l-31.521,7.885c-3.5,0.865-6.313,3.458-7.5,6.865
										c-1.479,4.302-3.146,8.469-5.104,12.51c-1.563,3.24-1.396,7.063,0.458,10.146l16.667,27.781l-33.479,33.479l-27.792-16.667
										c-3.063-1.854-6.896-2.021-10.146-0.448c-4.042,1.958-8.208,3.604-12.521,5.104c-3.396,1.177-5.979,3.99-6.854,7.49
										l-7.875,31.521h-47.333l-7.875-31.521c-0.875-3.5-3.458-6.313-6.854-7.49c-4.313-1.5-8.479-3.146-12.521-5.104
										c-3.271-1.583-7.104-1.406-10.146,0.448l-27.792,16.667l-33.479-33.479l16.667-27.781c1.854-3.083,2.021-6.906,0.458-10.146
										c-1.958-4.042-3.625-8.208-5.104-12.51c-1.188-3.406-4-6-7.5-6.865l-31.521-7.885v-47.333l31.521-7.885
										c3.5-0.865,6.313-3.458,7.5-6.865c1.479-4.302,3.146-8.469,5.104-12.51c1.563-3.24,1.396-7.063-0.458-10.146l-16.667-27.781
										l33.479-33.49l27.792,16.677c3.063,1.844,6.896,2.031,10.146,0.448c4.042-1.958,8.208-3.604,12.521-5.104
										c3.396-1.177,5.979-3.99,6.854-7.49l7.875-31.521h47.333l7.875,31.521c0.875,3.5,3.458,6.313,6.854,7.49
										c4.313,1.5,8.479,3.146,12.521,5.104c3.229,1.573,7.083,1.396,10.146-0.448l27.792-16.677l33.479,33.49l-16.667,27.781
										c-1.854,3.083-2.021,6.906-0.458,10.146c1.958,4.042,3.625,8.208,5.104,12.51c1.188,3.406,4,6,7.5,6.865l31.521,7.885V279.667z"
									/>
									<path
										d="M256,0C114.833,0,0,114.844,0,256s114.833,256,256,256s256-114.844,256-256S397.167,0,256,0z M256,490.667
										C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
										z"
									/>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</div>
		</div>
	);
}
TopPanel.propTypes = {
	showFunc: PropTypes.func.isRequired,
	contact: PropTypes.string.isRequired,
	isChatOpen: PropTypes.number.isRequired,
};
