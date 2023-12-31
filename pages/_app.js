import '../public/css/bootstrap.min.css'
import '../public/css/animate.css'
import '../public/css/meanmenu.css'
import '../public/css/boxicons.min.css'
import '../public/css/flaticon.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import "react-datepicker/dist/react-datepicker.css"
import '../public/css/style.css'
import '../public/css/responsive.css'
import Layout from '../components/_App/Layout';
import '@rmcooper/next-fullcalendar/common/main.css'
import '@rmcooper/next-fullcalendar/daygrid/main.css'
import '@rmcooper/next-fullcalendar/timegrid/main.css'
const MyApp =  ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp