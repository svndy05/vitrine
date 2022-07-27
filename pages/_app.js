import "../styles/styles.scss";
import Layout from "../components/layout";
import variables from '../styles/_variables.module.scss'


const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout color={variables.primaryColor}>
      <Component {...pageProps} />
    </Layout>
  );
};
export default MyApp