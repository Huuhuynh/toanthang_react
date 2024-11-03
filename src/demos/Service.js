import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import TabGrid from "../components/cards/TabCardGrid.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light";
import Hero from "../components/hero/TwoColumnWithVideo.js";
import { CarouselImg } from "../components/cards/CarouselImg.js";

export default () => {
  const Description2 = tw.span`inline-block`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block mt-8`;
  const Container = tw.div`relative`;
  const TwoColumn = tw.div`flex flex-col justify-between max-w-screen-xl mx-auto py-20 md:py-10`;
  return (
    <AnimationRevealPage>
      <Header />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      {/* <TabGrid
        heading={
          <>
            Sản Phẩm <HighlightedText>Thuỷ Sản</HighlightedText>
          </>
        }
      /> */}
      <Container>
        <TwoColumn css={tw`md:items-center`}>
          <CarouselImg />
          <HighlightedText>Dịch vụ</HighlightedText>
          <p>
            Công Ty TNHH Đầu Tư và Thương Mại Dịch Vụ Toàn Thắng Commerce là
            doanh nghiệp hàng đầu trong lĩnh vực đầu tư và thương mại dịch vụ
            tại Việt Nam. Chúng tôi cam kết mang lại các giải pháp kinh doanh
            hiệu quả và bền vững, với mục tiêu trở thành công ty tiên phong
            trong khu vực.
          </p>
          <strong>Địa chỉ công ty:</strong>
          <p>
            Địa chỉ: 49 đường số 6B (nối dài) khu dân cư Vĩnh Lộc, khu phố 4,
            phường Bình Hưng Hoà B, quận Bình Tân, thành phố Hồ Chí Minh
          </p>
          <p> Điện thoại: 0932186699</p>
          <strong>Công ty đã và đang đầu tư vào các lĩnh vực:</strong>
          <p>
            Thú Y Thuỷ Sản <br />
            Vận Tải
            <br />
            Đông Y Dưỡng Sinh
            <br />
            Hỗ trợ tài chính các dự án
            <br />
            Tư vấn hỗ pháp lý luật
          </p>
        </TwoColumn>
      </Container>

      <Footer />
    </AnimationRevealPage>
  );
};
