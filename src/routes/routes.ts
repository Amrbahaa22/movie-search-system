const staticRoutes = {
    notFound: '/404',
    home:'/',
    searchPage: '/search-page',
    favListPage: '/fav-list-page'
}

const dynamicRoutes = {
    movieDetails: (_:TemplateStringsArray, movieId:string) =>`/movie/${movieId}`
};

export {staticRoutes, dynamicRoutes};