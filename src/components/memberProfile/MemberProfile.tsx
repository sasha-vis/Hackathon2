import React from 'react';
import { FaGithub, FaTelegram } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import styles from './MemberProfile.module.css';

interface SocialLinks {
	github?: string;
	vk?: string;
	telegram?: string;
}

interface MemberProfileProps {
	firstName: string;
	lastName: string;
	age: number;
	about: string;
	photo?: string;
	defaultImage: string;
	socialLinks: SocialLinks;
	projectContribution: string;
}

export const MemberProfile: React.FC<MemberProfileProps> = ({
	firstName,
	lastName,
	age,
	about,
	photo,
	defaultImage,
	socialLinks,
	projectContribution,
}) => {
	return (
		<div className={styles.memberProfile}>
			<div className={styles.profileHeader}>
				<div className={styles.profileImage}>
					<img
						src={photo || defaultImage}
						alt={`${firstName} ${lastName}`}
					/>
				</div>

				<div className={styles.profileInfo}>
					<h1 className={styles.name}>
						{firstName} {lastName}
					</h1>
					<p className={styles.age}>Возраст: {age} лет</p>
				</div>
			</div>

			<div className={styles.section}>
				<h2 className={styles.sectionTitle}>О себе</h2>
				<p className={styles.sectionContent}>{about}</p>
			</div>

			<div className={styles.section}>
				<h2 className={styles.sectionTitle}>Социальные сети</h2>
				<div className={styles.socialLinks}>
					{socialLinks.github && (
						<a
							href={socialLinks.github}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.socialIcon}
							title="GitHub"
						>
							<FaGithub />
						</a>
					)}
					{socialLinks.vk && (
						<a
							href={socialLinks.vk}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.socialIcon}
							title="VKontakte"
						>
							<SlSocialVkontakte />
						</a>
					)}
					{socialLinks.telegram && (
						<a
							href={socialLinks.telegram}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.socialIcon}
							title="Telegram"
						>
							<FaTelegram />
						</a>
					)}
				</div>
			</div>

			<div className={styles.section}>
				<h2 className={styles.sectionTitle}>Вклад в проект</h2>
				<p className={styles.sectionContent}>{projectContribution}</p>
			</div>
		</div>
	);
};
