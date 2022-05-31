import Layout from '../layouts/Main';
import Footer from '../components/footer';
import About from '../components/about-us';
import Subscribe from '../components/subscribe';


const Profile = () => {
    return (
      <Layout>
<div class="container1">
  <div class="avatar-flip">
    <img src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg" height="150" width="150" />
    <img src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original" height="150" width="150" />
  </div>
  <h21>John Smith</h21>
  <h41>HOVER OVER CONTAINER</h41>
  <p1>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna ip sum dolore.</p1>
  <p1>Connec dolore ipsum faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.</p1>
</div>

       
      <Footer />
      </Layout>
    )
  }
    
  export default Profile