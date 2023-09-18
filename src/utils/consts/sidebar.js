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
        path: '/takipciler',
        title: 'Takipciler'
    },
    {
        path: '/takip-edilenler',
        title: 'Takip Edilenler'
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
        onClick: () => console.log('logout butonuna basildi'),
        sensitive: true,
        title: 'Cikis Yap'
    }
    

]