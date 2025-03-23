import { CONTACTS } from '../constans';
import { FaGithub, FaTelegram, FaPhone, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import PropTypes from 'prop-types';

export const getContactElement = ({ id, url }) => {
	const contact = CONTACTS.find((c) => c.id === id);
	if (!contact) return null;

	let Icon;
	switch (contact.id) {
		case '1':
			Icon = IoMdMail;
			return (
				<a
					href={`mailto:${url}`}
					aria-label="Email"
				>
					<Icon />
				</a>
			);
		case '2':
			Icon = FaPhone;
			return (
				<a
					href={`tel:${url}`}
					aria-label="Phone"
				>
					<Icon />
				</a>
			);
		case '3':
			Icon = FaTelegram;
			break;
		case '4':
			Icon = FaGithub;
			break;
		case '5':
			Icon = FaInstagram;
			break;
		case '6':
			Icon = FaLinkedin;
			break;
		default:
			return null;
	}

	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={contact.name}
		>
			<Icon />
		</a>
	);
};

getContactElement.propTypes = {
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	url: PropTypes.string.isRequired,
};
