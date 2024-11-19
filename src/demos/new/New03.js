import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light";
import { CarouselImg } from "../../components/cards/CarouselImg.js";

export default () => {
  const Description2 = tw.span`inline-block`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block mt-8`;
  const Container = tw.div`relative`;
  const TwoColumn = tw.div`flex flex-col justify-between max-w-screen-xl mx-auto py-20 md:py-10`;
  const Title = tw.h1`text-blue-700 mt-8 font-bold text-3xl`;
  const ColumnGrid = tw.div``;
  const PostEvent = tw.div``;

  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <TwoColumn css={tw`md:items-center`}>
          <CarouselImg />
          <HighlightedText>Tin tức</HighlightedText>
          <ColumnGrid>
            <PostEvent>
              <div
                class="elementor-element elementor-element-a8f4dde elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
                data-id="a8f4dde"
                data-element_type="widget"
                data-widget_type="theme-post-title.default"
              >
                <Title>
                Nắm chắc "bí kíp" phòng chống dịch bệnh: Tôm khỏe mạnh, mùa vụ
                bội thu
                </Title>
              </div>
              <div class="the-content">
                <p>
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        <strong>Tình Hình Dịch Bệnh Hiện Nay</strong>
                      </span>
                    </span>
                  </span>
                </p>

                <p>
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        Báo cáo từ Bộ NN&amp;PTNT đánh giá tình hình dịch bệnh
                        trên tôm nuôi nước lợ những năm qua đang diễn biến phức
                        tạp. Những bệnh nguy hiểm như hoại tử gan tụy, đốm
                        trắng, và vi bào tử trùng đang gây nên tổn thất đáng kể
                        cho người làm trong ngành chăn nuôi tôm.
                      </span>
                    </span>
                  </span>
                </p>

                <p>
                  <strong>
                    <span class="line-height:2;">
                      <span class="font-size:18px;">
                        <span class="font-family:Times New Roman,Times,serif;">
                          Đối Mặt với Nguy Cơ Mới
                        </span>
                      </span>
                    </span>
                  </strong>
                </p>

                <p>
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        Ngoài các bệnh truyền thống, Bộ cũng cảnh báo về nguy cơ
                        xuất hiện của các bệnh mới như DiV1, bệnh mờ đục thân
                        (TPD), và bệnh thủy tinh (GPD). Điều này đặt ra một
                        thách thức mới, đòi hỏi sự chuẩn bị và phối hợp chặt chẽ
                        từ cả ngành và chính quyền.
                      </span>
                    </span>
                  </span>
                </p>

                <p>&nbsp;</p>

                <p class="text-align: center;">
                  <trust>
                    <img
                      alt="Cảnh giác với một số dịch bệnh mới có nguy cơ xâm nhiễm vào Việt Nam"
                      src="https://vibo.com.vn/vnt_upload/news/02_2024/dich_benh_tom.jpg"
                      class="width: 600px; height: 400px;"
                    />
                    <span class="ck_desc_img"></span>
                  </trust>
                </p>

                <p class="text-align: center;">
                  <i>
                    <span>
                      Cảnh giác với một số dịch bệnh mới có nguy cơ xâm nhiễm
                      vào Việt Nam
                    </span>
                  </i>
                  .
                </p>

                <p>&nbsp;</p>

                <p>
                  <strong>
                    <span class="line-height:2;">
                      <span class="font-size:18px;">
                        <span class="font-family:Times New Roman,Times,serif;">
                          Kế Hoạch Quốc Gia và Tiến Triển Đạt Được
                        </span>
                      </span>
                    </span>
                  </strong>
                </p>

                <p>
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        Để đối phó với tình hình này, Bộ NN&amp;PTNT đã ban hành
                        Kế hoạch quốc gia phòng chống dịch bệnh, giai đoạn 2021
                        – 2030. Đồng thời, họ đã tăng cường công tác kiểm soát
                        dịch bệnh và xây dựng cơ sở an toàn dịch bệnh động vật
                        thủy sản.
                      </span>
                    </span>
                  </span>
                </p>

                <p>
                  <strong>
                    <span class="line-height:2;">
                      <span class="font-size:18px;">
                        <span class="font-family:Times New Roman,Times,serif;">
                          Số Liệu và Thống Kê
                        </span>
                      </span>
                    </span>
                  </strong>
                </p>

                <p>
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        Theo số liệu từ Cục Thủy sản, đã xây dựng thành công 33
                        cơ sở an toàn dịch bệnh, trong đó có 28 cơ sở sản xuất
                        tôm giống và 5 cơ sở nuôi tôm thương phẩm. Tuy nhiên,
                        vẫn còn nhiều cơ sở chưa đạt đến tiêu chuẩn an toàn.
                      </span>
                    </span>
                  </span>
                </p>

                <p>
                  <strong>
                    <span class="line-height:2;">
                      <span class="font-size:18px;">
                        <span class="font-family:Times New Roman,Times,serif;">
                          Thách Thức và Giải Pháp
                        </span>
                      </span>
                    </span>
                  </strong>
                </p>

                <p>
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        Mặc dù đã có chính sách và kế hoạch, nhưng công tác
                        phòng chống dịch bệnh chưa đáp ứng đủ yêu cầu sản xuất.
                        Bộ NN&amp;PTNT đề xuất các tỉnh, thành phố có ngành nuôi
                        tôm nước lợ phải đẩy mạnh triển khai kế hoạch quốc gia
                        và cấp đủ kinh phí.
                      </span>
                    </span>
                  </span>
                </p>

                <p>
                  <strong>
                    <span class="line-height:2;">
                      <span class="font-size:18px;">
                        <span class="font-family:Times New Roman,Times,serif;">
                          Tuyên Truyền và Hướng Dẫn
                        </span>
                      </span>
                    </span>
                  </strong>
                </p>

                <p>
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        Ngoài những biện pháp cụ thể, Bộ cũng đề xuất tăng cường
                        công tác tuyên truyền, giáo dục người làm trong ngành về
                        cách phòng chống dịch bệnh. Việc này bao gồm cả hướng
                        dẫn khai báo dịch bệnh, xử lý nước, và xử lý khi có dịch
                        bệnh.
                      </span>
                    </span>
                  </span>
                </p>

                <p>
                  <strong>
                    <span class="line-height:2;">
                      <span class="font-size:18px;">
                        <span class="font-family:Times New Roman,Times,serif;">
                          Chủ Động Từng Bước
                        </span>
                      </span>
                    </span>
                  </strong>
                </p>

                <p>
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        Bài viết kết luận với một cuộc gọi hành động, yêu cầu sự
                        chủ động từ cấp tỉnh, thành phố, đến cấp cơ sở. Tổ chức
                        kiểm soát, tuyên truyền, và xây dựng cơ sở an toàn là
                        chìa khóa để ngăn chặn dịch bệnh và đảm bảo sự phát
                        triển bền vững của ngành chăn nuôi tôm nước lợ.
                      </span>
                    </span>
                  </span>
                </p>
                <span class="line-height:2;">
                  <span class="font-size:18px;">
                    <span class="font-family:Times New Roman,Times,serif;">
                      {" "}
                    </span>
                  </span>
                </span>

                <p class="text-align: right;">
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        <em>Theo ThuysanVietNam</em>
                      </span>
                    </span>
                  </span>
                </p>
              </div>
            </PostEvent>
          </ColumnGrid>
        </TwoColumn>
      </Container>

      <Footer />
    </AnimationRevealPage>
  );
};
