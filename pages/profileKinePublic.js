import Layout from '../layouts/Main';
import Footer from '../components/footer';
import { useRouter } from 'next/router';
import Axios from "axios";

const profileKinePublic = () => {
const router = useRouter();
const {pid} = router.query
console.log(pid);
    return (
      <Layout>
<ProfileCard>

</ProfileCard>

       
      <Footer />
      </Layout>
    )
  }


  export default profileKinePublic

  export const getStaticProps = async () => {
    const res = await Axios.get("http://localhost:3001/user/");
    return {
      props: { data: res.data },
    };
  };