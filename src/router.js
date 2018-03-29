/* global Vue */
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import WelcomePage from '@/components/WelcomePage'
import MainTabPage from '@/components/MainTabPage'
import RepositoryDetailPage from '@/components/RepositoryDetailPage'
import UserInfoPage from '@/components/UserInfoPage'
import EventItem from '@/components/widget/EventItem'
import RepositoryItem from '@/components/widget/RepositoryItem'
import UserHeadItem from '@/components/widget/UserHeadItem'
import RepositoryHeadItem from '@/components/widget/RepositoryHeadItem'

Vue.use(Router)

Vue.component('EventItem', EventItem)
Vue.component('RepositoryItem', RepositoryItem)
Vue.component('UserHeadItem', UserHeadItem)
Vue.component('RepositoryHeadItem', RepositoryHeadItem)

module.exports = new Router({
    routes: [
        {
            path: '/login',
            name: 'LoginPage',
            component: LoginPage
        },
        {
            path: '/',
            name: 'WelcomePage',
            component: WelcomePage
        },
        {
            path: '/main',
            name: 'MainTabPage',
            component: MainTabPage
        },
        {
            path: '/repository/detail',
            name: 'RepositoryDetailPage',
            component: RepositoryDetailPage
        },
        {
            path: '/userInfo',
            name: 'UserInfoPage',
            component: UserInfoPage
        }


    ]
})
