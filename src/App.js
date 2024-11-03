/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are building a custom one yourself */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */

// import Hero from "components/hero/TwoColumnWithVideo.js";
// import Hero from "components/hero/TwoColumnWithInput.js";
// import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
// import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
// import Hero from "components/hero/FullWidthWithImage.js";
// import Hero from "components/hero/BackgroundAsImage.js";
// import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";

// import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
// import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
// import Features from "components/features/VerticalWithAlternateImageAndText.js";
// import Features from "components/features/DashedBorderSixFeatures";
// import MainFeature from "components/features/TwoColWithButton.js";
// import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
// import FeatureWithSteps from "components/features/TwoColWithSteps.js";
// import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";

// import Pricing from "components/pricing/ThreePlans.js";
// import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
// import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";

// import SliderCard from "components/cards/ThreeColSlider.js";
// import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
// import TabGrid from "components/cards/TabCardGrid.js";

// import Blog from "components/blogs/ThreeColSimpleWithImage.js";
// import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
// import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
// import Blog from "components/blogs/GridWithFeaturedPost.js";

// import Testimonial from "components/testimonials/TwoColumnWithImage.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import Testimonial from "components/testimonials/SimplePrimaryBackground.js";

// import FAQ from "components/faqs/SimpleWithSideImage.js";
// import FAQ from "components/faqs/SingleCol.js";
// import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";

// import ContactUsForm from "components/forms/SimpleContactUs.js";
// import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
// import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
//
// import GetStarted from "components/cta/GetStarted.js";
// import GetStarted from "components/cta/GetStartedLight.js";
// import DownloadApp from "components/cta/DownloadApp.js";

// import Footer from "components/footers/SimpleFiveColumn.js";
// import Footer from "components/footers/FiveColumnWithInputForm.js";
// import Footer from "components/footers/FiveColumnWithBackground.js";
// import Footer from "components/footers/FiveColumnDark.js";
// import Footer from "components/footers/MiniCenteredFooter.js";

/* Ready Made Pages (from demos folder) */
// import EventLandingPage from "demos/EventLandingPage.js";
// import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";
// import AgencyLandingPage from "demos/AgencyLandingPage.js";
// import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
// import RestaurantLandingPage from "demos/RestaurantLandingPage.js";
// import ServiceLandingPage from "demos/ServiceLandingPage.js";
// import HostingCloudLandingPage from "demos/HostingCloudLandingPage.js";

/* Inner Pages */
// import LoginPage from "pages/Login.js";
// import SignupPage from "pages/Signup.js";
// import PricingPage from "pages/Pricing.js";
// import AboutUsPage from "pages/AboutUs.js";
// import ContactUsPage from "pages/ContactUs.js";
// import BlogIndexPage from "pages/BlogIndex.js";
// import TermsOfServicePage from "pages/TermsOfService.js";
// import PrivacyPolicyPage from "pages/PrivacyPolicy.js";
import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import RestaurantLandingPage from "./demos/RestaurantLandingPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./demos/Product";
import Songstress from "./detail/chongstress";
import Nutrition from "./detail/nutripro";
import TTPatholStop from "./detail/TTPathoStop";
import Inobitol from "./detail/Inobitol";
import Login from "./pages/Login";
import TTHepaFix from "./detail/TTHepaFix";
import TTLiverBoost from "./detail/TTLiverBoost";
import TTLiverSur from "./detail/TTLiverSur";
import SulBSC from "./detail/SulBSC";
import LiverTonic from "./detail/LiverTonic";
import AquaCurb from "./detail/AquaCrub";
import TTZ from "./detail/TTZ";
import AllCide from "./detail/AllCide";
import ToxinSSe from "./detail/ToxinSSe";
import TTAqua from "./detail/TTAqua";
import ListPost from "./admin/ListPost";
import CreatePost from "./admin/CreatePost";
import FlorSol from "./detail/FlorSol";
import ANTIPARA from "./detail/dactribenh/ANTIPARA";
import CANXIONE from "./detail/dinhduong/CANXIONE ";
import CHELATE from "./detail/dinhduong/CHELATE";
import PROTAMIN from "./detail/dinhduong/PROTAMIN";
import NUTRIGANO from "./detail/dinhduong/NUTRIGANO";
import SUPERCANXI from "./detail/dinhduong/SUPERCANXI";
import Tangtrong from "./detail/dinhduong/tangtrong";
import VITAAMIN from "./detail/dinhduong/VITAAMIN";
import C14 from "./detail/tieuhoa/C14";
import ENVIZYME from "./detail/tieuhoa/ENVIZYME";
import FEEDMULTIZYME from "./detail/tieuhoa/FEEDMULTIZYME";
import PRAZIWS from "./detail/moitruong/PRAZIWS";
import FOSFOTLS from "./detail/dactribenh/FOSFOTLS";
import AQUABUSAL from "./detail/dinhduong/AQUABUSAL";
import Info from "./demos/Info";
import Service from "./demos/Service";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  return (
    <Router>
      <GlobalStyles />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RestaurantLandingPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/chongstress" element={<Songstress />} />
        <Route path="/nutripro" element={<Nutrition />} />
        <Route path="/ttpathostop" element={<TTPatholStop />} />
        <Route path="/inobitol" element={<Inobitol />} />
        <Route path="/TTHepaFix" element={<TTHepaFix />} />
        <Route path="/TTLiverBoost" element={<TTLiverBoost />} />
        <Route path="/TTLiverSur" element={<TTLiverSur />} />
        <Route path="/SulBSC" element={<SulBSC />} />
        <Route path="/LiverTonic" element={<LiverTonic />} />
        <Route path="/AquaCrub" element={<AquaCurb />} />
        <Route path="/TTZ" element={<TTZ />} />
        <Route path="/AllCide" element={<AllCide />} />
        <Route path="/ToxinSSe" element={<ToxinSSe />} />
        <Route path="/TTAqua" element={<TTAqua />} />
        <Route path="/listport" element={<ListPost />} />
        <Route path="/createport" element={<CreatePost />} />
        <Route path="/florsol" element={<FlorSol />} />
        <Route path="/ANTIPARA" element={<ANTIPARA />} />
        <Route path="/canxione" element={<CANXIONE />} />
        <Route path="/CHELATE" element={<CHELATE/>} />
        <Route path="/PROTAMIN" element={<PROTAMIN/>} />
        <Route path="/NUTRIGANO" element={<NUTRIGANO/>} />
        <Route path="/SUPER_CANXI" element={<SUPERCANXI/>} />
        <Route path="/tangtrong" element={<Tangtrong/>} />
        <Route path="/VITAAMIN" element={<VITAAMIN/>} />
        <Route path="/C14" element={<C14/>} />
        <Route path="/ENVIZYME" element={<ENVIZYME/>} />
        <Route path="/FEEDMULTIZYME" element={<FEEDMULTIZYME/>} />
        <Route path="/PRAZIWS" element={<PRAZIWS/>} />
        <Route path="/FOSFOTLS" element={<FOSFOTLS/>} />
        <Route path="/AQUABUSAL" element={<AQUABUSAL/>} />
        <Route path="/info" element={<Info/>} />
        <Route path="/Service" element={<Service/>} />
        
      </Routes>
    </Router>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
