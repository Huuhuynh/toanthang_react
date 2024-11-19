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
                  Bí quyết chọn quạt cho ao tôm phù hợp: So sánh chi tiết quạt 6
                  cánh và 8 cánh
                </Title>
              </div>
              <div class="the-content">
                <p class="text-align: justify;">
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        {" "}
                        <span>
                          Trong ngành nuôi tôm, việc lựa chọn và sử dụng quạt
                          nước đóng vai trò quan trọng, giúp tạo ra môi trường
                          sống lý tưởng cho tôm, từ đó nâng cao năng suất và
                          chất lượng sản phẩm. Bài viết này sẽ phân tích ưu và
                          nhược điểm của quạt 6 cánh và 8 cánh, giúp người nuôi
                          tôm đưa ra lựa chọn phù hợp.
                        </span>
                      </span>
                    </span>
                  </span>
                </p>

                <p class="text-align: justify;">
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        <strong>
                          Tầm Quan Trọng Của Quạt Nước Trong Ao Nuôi Tôm
                        </strong>
                      </span>
                    </span>
                  </span>
                </p>

                <p class="text-align: justify;">
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        {" "}
                      </span>
                    </span>
                  </span>
                </p>

                <p class="text-align: justify;">
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        <span>
                          Quạt nước không chỉ giúp cung cấp oxy cần thiết cho
                          tôm mà còn giúp loại bỏ khí độc và chất cặn, tạo dòng
                          chảy nước giúp phân tán đều oxy và thức ăn trong nước.
                          Điều này đặc biệt quan trọng trong các mô hình nuôi
                          thâm canh với mật độ cao, nơi nhu cầu oxy và việc loại
                          bỏ chất thải tăng lên đáng kể.
                        </span>
                      </span>
                    </span>
                  </span>
                </p>

                {/* <p class="text-align: justify;">&nbsp;</p> */}

                <p class="text-align: center;">
                  <trust>
                    <img
                      alt="Quạt nước là một phần quan trọng trong việc nuôi tôm"
                      src="https://vibo.com.vn/vnt_upload/news/02_2024/quat_nuoc_ao_tom.jpg"
                      class="width: 600px; height: 400px;"
                    />
                    <span class="ck_desc_img"></span>
                  </trust>
                </p>

                <p class="text-align: center;">
                  <em>Quạt nước là một phần quan trọng trong việc nuôi tôm</em>
                </p>

                <p class="text-align: justify;">&nbsp;</p>

                <p class="text-align: justify;">
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        <strong>Lựa Chọn Quạt Nước: 6 Cánh Hay 8 Cánh?</strong>
                      </span>
                    </span>
                  </span>
                </p>

                <p class="text-align: justify;">
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        <strong>Hiệu Suất và Dòng Chảy</strong>
                      </span>
                    </span>
                  </span>
                </p>

                <ul class="list-outside list-disc pl-8">
                  <li>
                    <p class="text-align: justify;">
                      <span class="line-height:2;">
                        <span class="font-size:18px;">
                          <span class="font-family:Times New Roman,Times,serif;">
                            <span>
                              <strong>Quạt 8 cánh</strong>
                            </span>
                            <span>
                              : Có khả năng tạo ra dòng chảy mạnh mẽ hơn, phù
                              hợp với các ao nuôi có mật độ tôm cao, cần dòng
                              chảy nước mạnh để đảm bảo oxy và thức ăn được phân
                              tán đều.
                            </span>
                          </span>
                        </span>
                      </span>
                    </p>
                  </li>
                  <li>
                    <p class="text-align: justify;">
                      <span class="line-height:2;">
                        <span class="font-size:18px;">
                          <span class="font-family:Times New Roman,Times,serif;">
                            <span>
                              <strong>Quạt 6 cánh</strong>
                            </span>
                            <span>
                              : Phù hợp với các ao nuôi có mật độ tôm thấp hơn,
                              nơi nhu cầu về dòng chảy không quá mạnh mẽ.
                            </span>
                          </span>
                        </span>
                      </span>
                    </p>
                  </li>
                </ul>

                <p class="text-align: justify;">
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        <strong>Tiếng Ồn và Tiêu Thụ Năng Lượng</strong>
                      </span>
                    </span>
                  </span>
                </p>

                <ul class="list-outside list-disc pl-8">
                  <li>
                    <p class="text-align: justify;">
                      <span class="line-height:2;">
                        <span class="font-size:18px;">
                          <span class="font-family:Times New Roman,Times,serif;">
                            <span>
                              <strong>Quạt 8 cánh</strong>
                            </span>
                            <span>
                              : Tạo ra tiếng ồn lớn hơn và tiêu thụ năng lượng
                              cao hơn do số lượng cánh nhiều hơn, cần xem xét
                              khi nuôi tôm trong môi trường yêu cầu sự yên tĩnh
                              và tiết kiệm năng lượng.
                            </span>
                          </span>
                        </span>
                      </span>
                    </p>
                  </li>
                  <li>
                    <p class="text-align: justify;">
                      <span class="line-height:2;">
                        <span class="font-size:18px;">
                          <span class="font-family:Times New Roman,Times,serif;">
                            <span>
                              <strong>Quạt 6 cánh</strong>
                            </span>
                            <span>
                              : Ít tiếng ồn hơn và tiêu thụ năng lượng thấp hơn,
                              phù hợp với các trang trại nuôi tôm có yêu cầu cao
                              về tiết kiệm năng lượng và giảm tiếng ồn.
                            </span>
                          </span>
                        </span>
                      </span>
                    </p>
                  </li>
                </ul>

                <p class="text-align: justify;">
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        <strong>Giá Thành và Kinh Tế</strong>
                      </span>
                    </span>
                  </span>
                </p>

                <ul class="list-outside list-disc pl-8">
                  <li>
                    <p class="text-align: justify;">
                      <span class="line-height:2;">
                        <span class="font-size:18px;">
                          <span class="font-family:Times New Roman,Times,serif;">
                            <span>
                              <strong>Quạt 8 cánh</strong>
                            </span>
                            <span>
                              : Có giá thành cao hơn do yêu cầu công nghệ sản
                              xuất phức tạp và khả năng vận hành mạnh mẽ, cần
                              cân nhắc kỹ lưỡng về mặt kinh tế trước khi quyết
                              định đầu tư.
                            </span>
                          </span>
                        </span>
                      </span>
                    </p>
                  </li>
                  <li>
                    <p class="text-align: justify;">
                      <span class="line-height:2;">
                        <span class="font-size:18px;">
                          <span class="font-family:Times New Roman,Times,serif;">
                            <span>
                              <strong>Quạt 6 cánh</strong>
                            </span>
                            <span>
                              : Có giá thành thấp hơn, phù hợp với các trang
                              trại có ngân sách hạn chế nhưng vẫn muốn cải thiện
                              chất lượng môi trường ao nuôi.
                            </span>
                          </span>
                        </span>
                      </span>
                    </p>
                  </li>
                </ul>

                <p class="text-align: justify;">&nbsp;</p>

                <p class="text-align: center;">
                  <trust>
                    <img
                      alt="Quạt 8 cánh"
                      src="https://vibo.com.vn/vnt_upload/news/02_2024/quat_8_canh.jpg"
                      class="width: 600px; height: 400px;"
                    />
                    <span class="ck_desc_img"></span>
                  </trust>
                </p>

                <p class="text-align: center;">
                  <em>Quạt 8 cánh</em>
                </p>

                <p class="text-align: justify;">&nbsp;</p>

                <p class="text-align: justify;">
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        <strong>Kết Luận</strong>
                      </span>
                    </span>
                  </span>
                </p>

                <p class="text-align: justify;">
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        {" "}
                      </span>
                    </span>
                  </span>
                </p>

                <p class="text-align: justify;">
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        <span>
                          Việc lựa chọn quạt nước phù hợp cho ao nuôi tôm phụ
                          thuộc vào nhiều yếu tố như mật độ nuôi, yêu cầu về
                          tiếng ồn, tiêu thụ năng lượng và ngân sách đầu tư.
                          Quạt 8 cánh phù hợp với các trang trại nuôi tôm thâm
                          canh công nghệ cao, trong khi quạt 6 cánh phù hợp với
                          các trang trại có yêu cầu tiết kiệm năng lượng và giảm
                          tiếng ồn. Người nuôi tôm cần cân nhắc kỹ lưỡng để đưa
                          ra lựa chọn tối ưu nhất, đảm bảo hiệu quả kinh tế và
                          môi trường sống tốt nhất cho tôm.
                        </span>{" "}
                      </span>
                    </span>
                  </span>
                </p>

                <p class="text-align: justify;">&nbsp;</p>

                <p class="text-align: right;">
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        <em>Theo Tepbac</em>
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
