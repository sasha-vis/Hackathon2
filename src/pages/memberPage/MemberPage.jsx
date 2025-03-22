// import { FaGithub, FaTelegram } from 'react-icons/fa';
// import { SlSocialVkontakte } from 'react-icons/sl';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectMembers, selectFavorites } from '../../selectors';
import { Progress, Badge, FavoriteButton } from '../../components';
import { addToFavorites, removeFromFavorites } from '../../actions';
import styles from './MemberPage.module.css';

export const MemberPage = () => {
	const dispatch = useDispatch();
	const members = useSelector(selectMembers);
	const favorites = useSelector(selectFavorites);
	const { id } = useParams();
	const isFavorite = favorites.includes(id);

	const member = members?.find((m) => m.id === id);
	if (!member) return <div>Такого участника не существует</div>;

	const addMemberCardToFavorites = (id) => {
		dispatch(addToFavorites(id));
	};

	const removeCardFromFavorites = (id) => {
		dispatch(removeFromFavorites(id));
	};

	return (
		<div className={styles.memberProfile}>
			<div className={styles.container}>
				<div className={styles.profileImage}>
					<img
						src={member.avatar}
						alt={`${member.name} ${member.surname}`}
					/>
				</div>
				<Badge roleId={member.roleId} />
			</div>

			<div className={styles.profileInfo}>
				<div className={styles.wrapper}>
					<h2>
						{member.name} {member.surname}
					</h2>
					{isFavorite ? (
						<FavoriteButton
							color={'#3b82f6'}
							onClick={() => removeCardFromFavorites(member.id)}
						/>
					) : (
						<FavoriteButton
							color={'#000'}
							onClick={() => addMemberCardToFavorites(member.id)}
						/>
					)}
				</div>

				<p className={styles.age}>{member.age} лет</p>

				<p className={styles.about}>{member.about}</p>

				<div className={styles.section}>
					<h3>Что разрабатывал:</h3>
					<div>{member.implementedFeature}</div>
				</div>

				<div className={styles.section}>
					<h3>Социальные сети:</h3>
					<div>
						{member.contacts.map((contact) => (
							<a
								key={contact.id}
								href={contact.url}
							>
								{contact.name}
							</a>
						))}
					</div>
				</div>

				<div className={styles.section}>
					<h3>Навыки:</h3>
					<div className={styles.progress}>
						{member.skills.map((skill) => (
							<Progress
								key={skill.id}
								name={skill.name}
								progress={Number(skill.progress)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
