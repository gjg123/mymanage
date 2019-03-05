const getters = {
	sidebar: state => state.app.sidebar,
    token: state => state.user.token,
    name: state => state.user.name,
    sidebar: state => state.app.sidebar,
    tableDatas: state => state.app.tableDatas,    
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
}
export default getters
