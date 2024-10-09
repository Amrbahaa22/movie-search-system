import { Navbar } from '@/components/Layouts/Navbar';
import { Footer } from '@/components/Footer';
import { MovieCard } from '@/features/MovieCard';
import styles from './SearchPageCard.module.scss';
import { SearchBar } from '@/components/SearchBar';

export const SearchPageCard: React.FC = () => {
	return (
		<>
			<Navbar />
			<div className={`${styles.index} page container`}>
				<div className={styles.header}>
					<h1>M_flicks</h1>
					<p></p>
					<div className={styles.searchWrapper}>
						<SearchBar />
					</div>
				</div>
				<div className={`container listGrid`}>
					<MovieCard />
				</div>
			</div>

			<Footer />
		</>
	);
};
