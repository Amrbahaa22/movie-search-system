import { MovieListType } from '@/state/types';
import axios from 'axios';
import { Metadata } from 'next';

type Props = {
	params: { movieId: string };
};

  {
    hid: 'description',
    name: 'description',
    content: this.item.overview,
  },
  {
    hid: 'keywords',
    name: 'keywords',
    content:
      'mailehereko, movies, tvshows, tv series, movies to watch, pramod poudel',
  },
  {
    hid: 'og:title',
    property: 'og:title',
    content: this.item.original_name,
  },
  {
    hid: 'og:description',
    property: 'og:description',
    content: this.item.overview,
  },
  {
    hid: 'og:image',
    property: 'og:image',
    content: 'https://image.tmdb.org/t/p/w1280' + this.item.backdrop_path,
  },
  {
    hid: 'og:url',
    property: 'og:url',
    content:
      'https://mailehereko.pramodpoudel.com.np/tv/' +
      this.$route.params.id,
  },

  { hid: 'og:locale', property: 'og:locale', content: 'en_EN' },

  {
    hid: 'og:site_name',
    property: 'og:site_name',
    content: this.item.original_name,
  },

  { hid: 'og:type', property: 'og:type', content: 'website' },

export async function generateMetadata({ params }: Props):Promise<Metadata> {
	const { movieId } = params;

	const url = `https://api.themoviedb.org/3/movie/${movieId}`;
	const options = {
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDdmN2NmMGVkOTM5ODRjZTEzN2IyNWZhYjg4MGRmZCIsIm5iZiI6MTcyNzk1OTY2NS4zMzA1NTcsInN1YiI6IjY2ZmU4ZThlYjE0NjI4MmY3Yjg0ZGMwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IbiPpXKjSPU4ObVnNwpnXjPufgx_imXWRPbqgjodQnw'
		}
	};

    const res:MovieListType = await axios.get(url, options);

	return {
		title: `${res.originalName} - `,
		description: res.overview
	};
}
