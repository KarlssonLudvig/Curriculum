import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import Contact from '../pages/contact.vue'
import Education from '../pages/education.vue'
import Experience from '../pages/experience.vue'
import EducationDetails from '../pages/education_details.vue'
import Skills from '../pages/skills.vue'







Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/education',
    name: 'education',
    component: Education
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience
  },
  {   
    path: '/education/details/:id',
    name: 'educationdetails',
    component: EducationDetails
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
