import HTMLHeader from '@/components/HTMLHeader';
import { HomeTemplate } from '@/components/Layouts/HomeTemplate';
import React from 'react';

const Index = (): JSX.Element => (
	<>
		<HTMLHeader title="Home Page" />
		<HomeTemplate />
	</>
);

export default Index;

Index.getLayout = (page: React.ReactElement) => <>{page}</>;
