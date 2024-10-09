import HTMLHeader from '@/components/HTMLHeader';
import { SearchPageCard } from '@/features/SearchPage';

export default function SearchPage(): JSX.Element {
	return (
		<>
			<HTMLHeader title="Movie search system - Search page" />
			<SearchPageCard />
		</>
	);
}

SearchPage.getLayout = (page: React.ReactElement) => <>{page}</>;