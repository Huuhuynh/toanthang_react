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
  const Title = tw.h1`text-blue-700 mt-8 font-bold`;
  const ColumnGrid = tw.div``;
  const PostEvent = tw.div``;
  
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
          <HighlightedText>Sự kiện</HighlightedText>
          <ColumnGrid>
            <PostEvent>
              <div
                class="elementor-element elementor-element-a8f4dde elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
                data-id="a8f4dde"
                data-element_type="widget"
                data-widget_type="theme-post-title.default"
              >
                <Title>
                  CHÚC MỪNG KỶ NIỆM 74 NĂM NGÀY TRUYỀN THỐNG NGÀNH THÚ Y VIỆT
                  NAM (11/7/1950-11/7/2024)
                </Title>
              </div>
              <div
                class="elementor-element elementor-element-2c58356 elementor-widget elementor-widget-theme-post-content"
                data-id="2c58356"
                data-element_type="widget"
                data-widget_type="theme-post-content.default"
              >
                <div class="elementor-widget-container">
                  <div class="pvc_clear"></div>
                  <p class="pvc_stats total_only " data-element-id="5480">
                    &nbsp;17,306&nbsp;lượt xem
                  </p>
                  <div class="pvc_clear"></div>
                  <p>
                    Để ghi nhận những cống hiến, phát huy vai trò và truyền
                    thống của Ngành Thú y, ngày 12/7/2005, Thủ tướng Chính phủ
                    đã ban hành Quyết định số 664/QĐ-TTg về ngày truyền thống
                    Ngành Thú y, theo đó Thủ tướng Chính phủ quyết định lấy ngày
                    11/7 là “Ngày truyền thống của Ngành Thú y”.
                  </p>
                  <p>
                    Suốt lịch sử 74 năm hình thành và phát triển, nhờ sự lãnh
                    đạo của Đảng và Nhà nước, cùng sự nỗ lực, tinh thần đoàn kết
                    của các thế hệ lãnh đạo, công chức, viên chức, người lao
                    động, ngành Thú y cả nước đạt được nhiều thành tựu quan
                    trọng, làm giàu thêm truyền thống và nâng cao vị thế của
                    ngành.
                  </p>
                  <p>
                    Không chỉ chăm sóc sức khỏe cho đàn vật nuôi, thủy sản, các
                    bác sỹ thú y đóng vai trò tích cực và quan trọng trong bảo
                    vệ sức khỏe cộng đồng và môi trường sinh thái. Kiểm soát tốt
                    các loại dịch bệnh nguy hiểm, bệnh truyền lây giữa động vật
                    và người theo cách tiếp cận “Một sức khỏe”.
                  </p>
                  <figure class="wp-block-image size-large">
                    <img
                      decoding="async"
                      width="1024"
                      height="576"
                      src="https://econamdung.com.vn/wp-content/uploads/2023/07/11-7-2023-Eco.-1024x576.jpg"
                      alt=""
                      class="wp-image-5481"
                      srcset="https://econamdung.com.vn/wp-content/uploads/2023/07/11-7-2023-Eco.-1024x576.jpg 1024w, https://econamdung.com.vn/wp-content/uploads/2023/07/11-7-2023-Eco.-300x169.jpg 300w, https://econamdung.com.vn/wp-content/uploads/2023/07/11-7-2023-Eco.-768x432.jpg 768w, https://econamdung.com.vn/wp-content/uploads/2023/07/11-7-2023-Eco.-1536x864.jpg 1536w, https://econamdung.com.vn/wp-content/uploads/2023/07/11-7-2023-Eco.-2048x1152.jpg 2048w, https://econamdung.com.vn/wp-content/uploads/2023/07/11-7-2023-Eco.-600x337.jpg 600w"
                      sizes="(max-width: 1024px) 100vw, 1024px"
                    />
                  </figure>
                  <p>
                    Tiếp nối truyền thống của ngành, Toàn Thắng Commerce không
                    ngừng học hỏi phấn đấu, sáng tạo đổi mới, nâng cao năng lực
                    sản xuất, nghiên cứu đưa ra những sản phẩm mới chất lượng
                    tốt nhất mang tới cho nhà chăn nuôi, Toàn Thắng Commerce
                    luôn cố gắng hỗ trợ tối đa về mặt sản phẩm, tư vấn điều trị
                    bệnh, kỹ thuật chăn nuôi cho Quý đại lý, khách hàng, chủ
                    trang trại,… góp phần cho sự phát triển bền vững của ngành
                    Thú y Việt Nam.
                  </p>
                  <p>
                    Nhân dịp kỷ niệm 73 năm ngày truyền thống ngành Thú y Việt
                    Nam, Toàn Thắng Commerce Kính chúc Quý khách hàng, đối tác,
                    các tổ chức, cá nhân, các bác sỹ, chuyên gia đã và đang hoạt
                    động trong ngành Thú y Sức khỏe – Trí tuệ – Thành công,
                    không ngừng tiếp nối và phát huy các giá trị truyền thống
                    của ngành, luôn sáng tạo đổi mới, đóng góp cho sự phát triển
                    bền vững của ngành Thú y Việt Nam!
                  </p>
                </div>
              </div>
            </PostEvent>
          </ColumnGrid>
        </TwoColumn>
      </Container>

      <Footer />
    </AnimationRevealPage>
  );
};
