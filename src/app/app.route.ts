import { HomeComponent } from './views/home/home.component';
import { EdComponent } from './views/education/ed.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { BlogComponent } from './views/blog/blog.component';
import { BlogPostComponent } from './views/blogpost/blogpost.component';
import { LoginComponent }from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { WriteComponent } from './views/write/write.component';
import { ContactComponent } from './views/contact/contact.component';
import { RegComponent } from './views/reg/reg.component';


export const routes = [
    {path:'', pathMatch:'full', component:HomeComponent},
    {path:'education', component:EdComponent},
    {path:'portfolio', component: PortfolioComponent},
    {path:'blog', component: BlogComponent},
    {path:'blogPost', component: BlogPostComponent},
    {path:'login', component: LoginComponent},
    {path:'profile', component: ProfileComponent},
    {path:'write', component: WriteComponent},
    {path:'contact', component: ContactComponent},
    {path:'reg', component: RegComponent}
   ]
