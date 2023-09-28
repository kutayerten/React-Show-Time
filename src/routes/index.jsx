import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "~/layouts/auth";
import WebLayout from "~/layouts/web";
import Articles from "~/pages/articles";
import Category from "~/pages/category";
import Discover from "~/pages/discover";
import Home from "~/pages/home";
import LectureRequests from "~/pages/lecture-requests";
import Profile from "~/pages/profile";
import Answers from "~/pages/profile/answers";
import EditProfile from "~/pages/profile/edit-profile";
import Followers from "~/pages/profile/followers";
import Following from "~/pages/profile/following";
import Notification from "~/pages/profile/notification";
import Questions from "~/pages/profile/questions";
import QADashboard from "~/pages/qa";
import Categories from "~/pages/qa/categories";
import PopularQuestions from "~/pages/qa/popular-questions";
import Question from "~/pages/qa/question";
import UnansweredQuestions from "~/pages/qa/unanswered-questions";
import UnsolvedQuestions from "~/pages/qa/unsolved-questions";
import User from "~/pages/user";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <WebLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/kesfet',
        element: <Discover />
      },
      {
        path: '/makaleler',
        element: <Articles />
        
      },
      {
        path: '/ders-istekleri',
        element: <LectureRequests />
      },
      {
        path: '/soru-cevap',
        element: <QADashboard />
      },
      {
        path: '/cevaplanmamis-sorular',
        element: <UnansweredQuestions />
      },
      {
        path: '/cozulmemis-sorular',
        element: <UnsolvedQuestions />
      },
      {
        path: '/kategoriler',
        element: <Categories />
      },
      {
        path: '/populer-sorular',
        element: <PopularQuestions />
      },
      {
        path: '/soru/:slug',
        element: <Question />
      },
      {
        path: '/uye/:slug',
        element: <User/>
      },
      {
        path: '/profil',
        element: <AuthLayout><Profile /></AuthLayout>,
        children:[
          {
            index: true,
            element: <EditProfile />
          },
          {
            path: 'takipciler',
            element: <Followers />
          },
          {
            path: 'takip-ettiklerin',
            element: <Following />
          },
          {
            path: 'sorular',
            element: <Questions />
          },
          {
            path: 'cevaplar',
            element: <Answers />
          },
          {
            path: 'bildirimler',
            element: <Notification />
          }
        ]
      },
      {
        path: '/:categorySlug',
        element: <Category />
      }

    ]
  }
])

export default routes
