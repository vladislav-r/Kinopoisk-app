import { useParams } from 'react-router-dom';
import Intro from '../../components/Intro/Intro';
import FILMS from '../../FILMS.json';

function FilmPage() {
	const { filmId } = useParams();
	return <Intro movie={FILMS[filmId - 1]} />;
}

export default FilmPage;
