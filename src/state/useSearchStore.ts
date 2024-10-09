import { create } from 'zustand';

type State = {
	searchTerm: string;
};

type Action = {
	setSearchTerm: (searchTerm:State['searchTerm']) => void;
};

const useSearchState = create<State & Action>((set) => ({
	searchTerm: '',
    setSearchTerm: (searchTerm) => set(()=> ({searchTerm})),
}));