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
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Container = tw.div`relative`;
  const TwoColumn = tw.div`flex flex-col justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
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
          <HighlightedText>Giới thiệu</HighlightedText>
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
          <span>
            <strong>Bài hát văn hóa của cty:</strong>Đường đến ngày vinh Quang
          </span>
          <span>
            <strong>Khẩu hiệu công ty:</strong>"Tinh Thần Toàn Thắng - Đi Đến
            Vinh Quang!"
          </span>
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
            <br />
            Tầm nhìn và Sứ mệnh
          </p>
          <strong>Tầm nhìn:</strong>
          <p>
            - Trở thành công ty đầu tư và thương mại dịch vụ hàng đầu khu vực,
            cung cấp giải pháp toàn diện và sáng tạo. <br /> - Phát triển bền
            vững, mang lại hiệu quả tối đa cho nhà đầu tư và điều kiện sống tốt
            nhất cho con người Sứ mệnh: <br /> - Mang lại giá trị tối ưu cho
            khách hàng thông qua dịch vụ chất lượng cao, minh bạch và chuyên
            nghiệp. <br /> - Đem đến những tiện ích, hiện đại sang trọng và thẩm
            mỹ cho cộng đồng xã hội.
          </p>
          <span>
            {" "}
            <strong>Hoài bão:</strong> Trở thành một trong những công ty hàng
            đầu khu vực, là đối tác được biết đến bởi thị trường trong và ngoài
            nước.{" "}
          </span>
          <span>
            <strong>Bản sắc văn hoá:</strong> Nhân văn - đề cao giá trị con
            người, chung tay vì cộng đồng xã hội.
          </span>
          <span>
            <strong>Thái độ với đồng nghiệp:</strong> Tôn trọng, đoàn kết, hợp
            tác, thẳng thắn, trung thực, học hỏi cùng phát triển nghề nghiệp.
          </span>
          <span>
            <strong>Thái độ với công việc:</strong> Sáng tạo, đổi mới, tự giác,
            chấp nhận mọi thử thách - khó khăn.
          </span>
          <span>
            <strong>Triết lý kinh doanh:</strong> <br />
            Luôn lắng nghe, học hỏi sáng tạo cải tiến để mang lại lợi ích lớn
            nhất cho khách hàng. <br />
            Minh bạch, liêm chính, uy tín trong quản lý kinh doanh. <br />
            Môi trường làm việc chuyên nghiệp tạo sự gắn bó lâu dài cho cán bộ
            nhân viên. <br />
            Quan tâm có trách nhiệm với cộng đồng. <br />
            Thái độ với khách hàng: Chuyên nghiệp, trung thực và nhiệt tình{" "}
            <br />
          </span>
        </TwoColumn>
      </Container>

      <Footer />
    </AnimationRevealPage>
  );
};
