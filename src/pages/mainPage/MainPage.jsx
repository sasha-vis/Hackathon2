import { Info, MemberCardList } from '../../components';
import { useSelector } from 'react-redux';
import { selectMembers } from '../../selectors';

export const MainPage = () => {
	const members = useSelector(selectMembers);

	return (
		<>
			<Info>
				<h1>Team #1</h1>
				<p>
					Простой сайт для практики навыков, где вы можете просматривать
					карточки с информацией о разработчиках и управлять списком избранных:
					добавляйте или удаляйте карточки из избранных.
				</p>
			</Info>

			<MemberCardList members={members} />
		</>
	);
};
