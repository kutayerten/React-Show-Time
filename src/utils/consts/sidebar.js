import { removeUser } from "~/stores/auth/actions"

export const SIDEBAR_MENU = [
    {
        path: '/',
        title: 'Anasayfa'
    },
    {
        path: '/kesfet',
        title: 'Kesfet'
    },
    {
        path: '/makaleler',
        title: 'Makaleler'
    },
    {
        path: '/soru-cevap',
        title: 'Soru & Cevap'
    },
    {
        path: '/ders-istekleri',
        title: 'Ders Istekleri',
        new : true
    }

]

export const QA_SIDEBAR_MENU = [
    {
        path : '/soru-cevap',
        title : 'Son Sorular'
    },
    {
        path : '/cevaplanmamis-sorular',
        title : 'Cevaplanmamis Sorular'
    },
    {
        path : '/cozulmemis-sorular',
        title : 'Cozulmemis Sorular'
    },
    {
        path: '/kategoriler',
        title : 'Kategoriler'
    },
    {
        path: '/populer-sorular',
        title : 'Populer Sorular'
    }

]


export const PROFILE_SIDEBAR_MENU = [
    {
        path: '/profil',
        title: 'Profil'
    },
    {
        path: '/profil/takipciler',
        title: 'Takipciler'
    },
    {
        path: '/profil/takip-ettiklerin',
        title: 'Takip Ettiklerin'
    },
    {
        path: '/profil/sorular',
        title: 'Sorular'
    },
    {
        path: '/profil/cevaplar',
        title: 'Cevaplar'
    },
    {
        path: '/profil/bildirimler',
        title: 'bildirimler'
    },
    {
        path: '/',
        title: 'Herkese Acik Profilin'
    },
    {
        onClick: () => removeUser(),
        sensitive: true,
        title: 'Cikis Yap'
    }
    

]