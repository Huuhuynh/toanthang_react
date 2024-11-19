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
                  Cách phân biệt tôm càng xanh và tôm càng sen nhanh chóng,
                  chính xác!
                </Title>
              </div>
              <div class="the-content">
                <p>
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        <strong>
                          1. Phân Biệt Tôm Càng Xanh và Tôm Càng Sen
                        </strong>
                      </span>
                    </span>
                  </span>
                </p>

                <p>
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        Tôm càng xanh và tôm càng sen, mặc dù thuộc cùng họ tôm
                        gai, nhưng lại mang đến những trải nghiệm khác nhau cho
                        người dùng. Dưới đây là những điểm đặc biệt để bạn có
                        thể phân biệt chúng một cách dễ dàng.
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

                <p data-sourcepos="19:1-19:16">
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        <strong>2. Đặc điểm:</strong>
                      </span>
                    </span>
                  </span>
                </p>

                <p data-sourcepos="21:1-21:23">
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        <strong>2.1. Tôm càng xanh:</strong>
                      </span>
                    </span>
                  </span>
                </p>

                <ul data-sourcepos="23:1-28:0">
                  <li data-sourcepos="23:1-23:59">
                    <p>
                      <span class="line-height:2;">
                        <span class="font-size:18px;">
                          <span class="font-family:Times New Roman,Times,serif;">
                            Kích thước lớn hơn tôm càng sen, có thể đạt đến hơn
                            30cm.
                          </span>
                        </span>
                      </span>
                    </p>
                  </li>
                  <li data-sourcepos="24:1-24:91">
                    <p>
                      <span class="line-height:2;">
                        <span class="font-size:18px;">
                          <span class="font-family:Times New Roman,Times,serif;">
                            Màu sắc chủ đạo là nâu, một số cá thể nhỏ hơn có thể
                            có màu xanh lục với sọc dọc mờ nhạt.
                          </span>
                        </span>
                      </span>
                    </p>
                  </li>
                  <li data-sourcepos="25:1-25:40">
                    <p>
                      <span class="line-height:2;">
                        <span class="font-size:18px;">
                          <span class="font-family:Times New Roman,Times,serif;">
                            Hai càng dài và có màu xanh đặc trưng.
                          </span>
                        </span>
                      </span>
                    </p>
                  </li>
                  <li data-sourcepos="26:1-26:9">
                    <p>
                      <span class="line-height:2;">
                        <span class="font-size:18px;">
                          <span class="font-family:Times New Roman,Times,serif;">
                            Vỏ dày.
                          </span>
                        </span>
                      </span>
                    </p>
                  </li>
                  <li data-sourcepos="27:1-28:0">
                    <p>
                      <span class="line-height:2;">
                        <span class="font-size:18px;">
                          <span class="font-family:Times New Roman,Times,serif;">
                            Thịt săn ngọt.
                          </span>
                        </span>
                      </span>
                    </p>
                  </li>
                </ul>

                <p data-sourcepos="29:1-29:22">
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        <strong>2.2. Tôm càng sen:</strong>
                      </span>
                    </span>
                  </span>
                </p>

                <ul data-sourcepos="31:1-36:0">
                  <li data-sourcepos="31:1-31:35">
                    <p>
                      <span class="line-height:2;">
                        <span class="font-size:18px;">
                          <span class="font-family:Times New Roman,Times,serif;">
                            Kích thước nhỏ hơn tôm càng xanh.
                          </span>
                        </span>
                      </span>
                    </p>
                  </li>
                  <li data-sourcepos="32:1-32:29">
                    <p>
                      <span class="line-height:2;">
                        <span class="font-size:18px;">
                          <span class="font-family:Times New Roman,Times,serif;">
                            Màu sắc chủ đạo là nâu sậm.
                          </span>
                        </span>
                      </span>
                    </p>
                  </li>
                  <li data-sourcepos="33:1-33:41">
                    <p>
                      <span class="line-height:2;">
                        <span class="font-size:18px;">
                          <span class="font-family:Times New Roman,Times,serif;">
                            Hai càng ngắn và nhỏ hơn tôm càng xanh.
                          </span>
                        </span>
                      </span>
                    </p>
                  </li>
                  <li data-sourcepos="34:1-34:10">
                    <p>
                      <span class="line-height:2;">
                        <span class="font-size:18px;">
                          <span class="font-family:Times New Roman,Times,serif;">
                            Vỏ mỏng.
                          </span>
                        </span>
                      </span>
                    </p>
                  </li>
                  <li data-sourcepos="35:1-36:0">
                    <p>
                      <span class="line-height:2;">
                        <span class="font-size:18px;">
                          <span class="font-family:Times New Roman,Times,serif;">
                            Có nhiều gạch.
                          </span>
                        </span>
                      </span>
                    </p>
                  </li>
                </ul>

                <p data-sourcepos="37:1-37:15">
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        <strong>3. So sánh:</strong>
                      </span>
                    </span>
                  </span>
                </p>

                <div class="horizontal-scroll-wrapper">
                  <p class="table-block-component">
                    <table-block
                      _nghost-ng-c595171184=""
                      ng-version="0.0.0-PLACEHOLDER"
                    ></table-block>
                  </p>

                  <div class="table-block-component">
                    <table-block
                      _nghost-ng-c595171184=""
                      ng-version="0.0.0-PLACEHOLDER"
                    >
                      <div _ngcontent-ng-c595171184="" class="table-block">
                        <div _ngcontent-ng-c595171184="" class="table-content">
                          <table
                            align="center"
                            bg_row_odd="#dddddd"
                            class="table_responsive"
                            data-sourcepos="39:1-46:31"
                          >
                            <tbody>
                              <tr data-sourcepos="39:1-39:43">
                                <td
                                  data-sourcepos="39:1-39:10"
                                  class="background-color: rgb(221, 221, 221);"
                                >
                                  <p>
                                    <strong>
                                      <span class="line-height:2;">
                                        <span class="font-size:18px;">
                                          <span class="font-family:Times New Roman,Times,serif;">
                                            Đặc điểm
                                          </span>
                                        </span>
                                      </span>
                                    </strong>
                                  </p>
                                </td>
                                <td
                                  data-sourcepos="39:12-39:26"
                                  class="background-color: rgb(221, 221, 221);"
                                >
                                  <p class="text-align: center;">
                                    <strong>
                                      <span class="line-height:2;">
                                        <span class="font-size:18px;">
                                          <span class="font-family:Times New Roman,Times,serif;">
                                            Tôm càng xanh
                                          </span>
                                        </span>
                                      </span>
                                    </strong>
                                  </p>
                                </td>
                                <td
                                  data-sourcepos="39:28-39:41"
                                  class="background-color: rgb(221, 221, 221);"
                                >
                                  <p class="text-align: center;">
                                    <strong>
                                      <span class="line-height:2;">
                                        <span class="font-size:18px;">
                                          <span class="font-family:Times New Roman,Times,serif;">
                                            Tôm càng sen
                                          </span>
                                        </span>
                                      </span>
                                    </strong>
                                  </p>
                                </td>
                              </tr>
                              <tr data-sourcepos="41:1-41:26">
                                <td data-sourcepos="41:1-41:12">
                                  <p>
                                    <span class="line-height:2;">
                                      <span class="font-size:18px;">
                                        <span class="font-family:Times New Roman,Times,serif;">
                                          Kích thước
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </td>
                                <td data-sourcepos="41:14-41:18">
                                  <p class="text-align: center;">
                                    <span class="line-height:2;">
                                      <span class="font-size:18px;">
                                        <span class="font-family:Times New Roman,Times,serif;">
                                          Lớn
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </td>
                                <td data-sourcepos="41:20-41:24">
                                  <p class="text-align: center;">
                                    <span class="line-height:2;">
                                      <span class="font-size:18px;">
                                        <span class="font-family:Times New Roman,Times,serif;">
                                          Nhỏ
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr data-sourcepos="42:1-42:50">
                                <td
                                  data-sourcepos="42:1-42:9"
                                  class="background-color: rgb(221, 221, 221);"
                                >
                                  <p>
                                    <span class="line-height:2;">
                                      <span class="font-size:18px;">
                                        <span class="font-family:Times New Roman,Times,serif;">
                                          Màu sắc
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </td>
                                <td
                                  data-sourcepos="42:11-42:38"
                                  class="background-color: rgb(221, 221, 221);"
                                >
                                  <p class="text-align: center;">
                                    <span class="line-height:2;">
                                      <span class="font-size:18px;">
                                        <span class="font-family:Times New Roman,Times,serif;">
                                          Nâu, xanh lục (cá thể nhỏ)
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </td>
                                <td
                                  data-sourcepos="42:40-42:48"
                                  class="background-color: rgb(221, 221, 221);"
                                >
                                  <p class="text-align: center;">
                                    <span class="line-height:2;">
                                      <span class="font-size:18px;">
                                        <span class="font-family:Times New Roman,Times,serif;">
                                          Nâu sậm
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr data-sourcepos="43:1-43:36">
                                <td data-sourcepos="43:1-43:6">
                                  <p>
                                    <span class="line-height:2;">
                                      <span class="font-size:18px;">
                                        <span class="font-family:Times New Roman,Times,serif;">
                                          Càng
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </td>
                                <td data-sourcepos="43:8-43:22">
                                  <p class="text-align: center;">
                                    <span class="line-height:2;">
                                      <span class="font-size:18px;">
                                        <span class="font-family:Times New Roman,Times,serif;">
                                          Dài, màu xanh
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </td>
                                <td data-sourcepos="43:24-43:34">
                                  <p class="text-align: center;">
                                    <span class="line-height:2;">
                                      <span class="font-size:18px;">
                                        <span class="font-family:Times New Roman,Times,serif;">
                                          Ngắn, nhỏ
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr data-sourcepos="44:1-44:19">
                                <td
                                  data-sourcepos="44:1-44:4"
                                  class="background-color: rgb(221, 221, 221);"
                                >
                                  <p>
                                    <span class="line-height:2;">
                                      <span class="font-size:18px;">
                                        <span class="font-family:Times New Roman,Times,serif;">
                                          Vỏ
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </td>
                                <td
                                  data-sourcepos="44:6-44:10"
                                  class="background-color: rgb(221, 221, 221);"
                                >
                                  <p class="text-align: center;">
                                    <span class="line-height:2;">
                                      <span class="font-size:18px;">
                                        <span class="font-family:Times New Roman,Times,serif;">
                                          Dày
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </td>
                                <td
                                  data-sourcepos="44:12-44:17"
                                  class="background-color: rgb(221, 221, 221);"
                                >
                                  <p class="text-align: center;">
                                    <span class="line-height:2;">
                                      <span class="font-size:18px;">
                                        <span class="font-family:Times New Roman,Times,serif;">
                                          Mỏng
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr data-sourcepos="45:1-45:32">
                                <td data-sourcepos="45:1-45:6">
                                  <p>
                                    <span class="line-height:2;">
                                      <span class="font-size:18px;">
                                        <span class="font-family:Times New Roman,Times,serif;">
                                          Thịt
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </td>
                                <td data-sourcepos="45:8-45:17">
                                  <p class="text-align: center;">
                                    <span class="line-height:2;">
                                      <span class="font-size:18px;">
                                        <span class="font-family:Times New Roman,Times,serif;">
                                          Săn ngọt
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </td>
                                <td data-sourcepos="45:19-45:30">
                                  <p class="text-align: center;">
                                    <span class="line-height:2;">
                                      <span class="font-size:18px;">
                                        <span class="font-family:Times New Roman,Times,serif;">
                                          Nhiều gạch
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </td>
                              </tr>
                              <tr data-sourcepos="46:1-46:31">
                                <td
                                  data-sourcepos="46:1-46:8"
                                  class="background-color: rgb(221, 221, 221);"
                                >
                                  <p>
                                    <span class="line-height:2;">
                                      <span class="font-size:18px;">
                                        <span class="font-family:Times New Roman,Times,serif;">
                                          Giá cả
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </td>
                                <td
                                  data-sourcepos="46:10-46:19"
                                  class="background-color: rgb(221, 221, 221);"
                                >
                                  <p class="text-align: center;">
                                    <span class="line-height:2;">
                                      <span class="font-size:18px;">
                                        <span class="font-family:Times New Roman,Times,serif;">
                                          Thấp hơn
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </td>
                                <td
                                  data-sourcepos="46:21-46:29"
                                  class="background-color: rgb(221, 221, 221);"
                                >
                                  <p class="text-align: center;">
                                    <span class="line-height:2;">
                                      <span class="font-size:18px;">
                                        <span class="font-family:Times New Roman,Times,serif;">
                                          Cao hơn
                                        </span>
                                      </span>
                                    </span>
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <p
                          _ngcontent-ng-c595171184=""
                          class="table-footer hide-from-message-actions ng-star-inserted"
                          hide-from-message-actions=""
                        >
                          <span class="line-height:2;">
                            <span class="font-size:18px;">
                              <span class="font-family:Times New Roman,Times,serif;"></span>
                            </span>
                          </span>
                        </p>
                      </div>
                    </table-block>
                  </div>
                </div>

                <div class="horizontal-scroll-wrapper">
                  <p class="table-block-component">
                    <table-block
                      _nghost-ng-c595171184=""
                      ng-version="0.0.0-PLACEHOLDER"
                    ></table-block>
                  </p>

                  <div class="table-block-component">
                    <table-block
                      _nghost-ng-c595171184=""
                      ng-version="0.0.0-PLACEHOLDER"
                    >
                      <p _ngcontent-ng-c595171184="" class="table-block">
                        <span class="line-height:2;">
                          <span class="font-size:18px;">
                            <span class="font-family:Times New Roman,Times,serif;">
                              <trust>
                                <img
                                  alt="Tôm càng xanh và tôm càng sen là hai loại tôm nước ngọt phổ biến và được ưa chuộng bởi hương vị thơm ngon và giá trị dinh dưỡng cao"
                                  src="https://vibo.com.vn/vnt_upload/news/02_2024/tom_cang.jpg"
                                  class="width: 600px; height: 400px;"
                                />
                                <span class="ck_desc_img"></span>
                              </trust>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p _ngcontent-ng-c595171184="" class="table-block">
                        <em>
                          <span class="line-height:2;">
                            <span class="font-size:18px;">
                              <span class="font-family:Times New Roman,Times,serif;">
                                Tôm càng xanh và tôm càng sen là hai loại tôm
                                nước ngọt phổ biến và được ưa chuộng bởi hương
                                vị thơm ngon và giá trị dinh dưỡng cao
                              </span>
                            </span>
                          </span>
                        </em>
                      </p>
                    </table-block>
                  </div>
                </div>

                <p data-sourcepos="48:1-48:21">
                  <span class="line-height:2;">
                    <span class="font-size:18px;">
                      <span class="font-family:Times New Roman,Times,serif;">
                        <strong>4. Cách chọn mua:</strong>
                      </span>
                    </span>
                  </span>
                </p>

                <ul data-sourcepos="50:1-59:0">
                  <li data-sourcepos="50:1-55:99">
                    <p>
                      <span class="line-height:2;">
                        <span class="font-size:18px;">
                          <span class="font-family:Times New Roman,Times,serif;">
                            <strong>Chọn tôm tươi sống:</strong>
                          </span>
                        </span>
                      </span>
                    </p>

                    <ul data-sourcepos="51:5-55:99">
                      <li data-sourcepos="51:5-51:68">
                        <p>
                          <span class="line-height:2;">
                            <span class="font-size:18px;">
                              <span class="font-family:Times New Roman,Times,serif;">
                                Quan sát chuyển động của tôm: Nên chọn những con
                                tôm bơi khỏe.
                              </span>
                            </span>
                          </span>
                        </p>
                      </li>
                      <li data-sourcepos="52:5-52:84">
                        <p>
                          <span class="line-height:2;">
                            <span class="font-size:18px;">
                              <span class="font-family:Times New Roman,Times,serif;">
                                Kiểm tra khớp nối trên thân tôm: Nên chọn những
                                con tôm có khớp nối khít nhau.
                              </span>
                            </span>
                          </span>
                        </p>
                      </li>
                      <li data-sourcepos="53:5-53:90">
                        <p>
                          <span class="line-height:2;">
                            <span class="font-size:18px;">
                              <span class="font-family:Times New Roman,Times,serif;">
                                Quan sát màu sắc vỏ tôm: Nên chọn những con tôm
                                có vỏ bóng loáng, không có vết nhớt.
                              </span>
                            </span>
                          </span>
                        </p>
                      </li>
                      <li data-sourcepos="54:5-54:90">
                        <p>
                          <span class="line-height:2;">
                            <span class="font-size:18px;">
                              <span class="font-family:Times New Roman,Times,serif;">
                                Kiểm tra càng và chân tôm: Nên chọn những con
                                tôm có càng và chân đầy đủ, chắc chắn.
                              </span>
                            </span>
                          </span>
                        </p>
                      </li>
                      <li data-sourcepos="55:5-55:99">
                        <p>
                          <span class="line-height:2;">
                            <span class="font-size:18px;">
                              <span class="font-family:Times New Roman,Times,serif;">
                                Quan sát hình dáng của đuôi tôm: Nên chọn những
                                con tôm có đuôi màu xanh đậm và được xếp gọn.
                              </span>
                            </span>
                          </span>
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li data-sourcepos="56:1-59:0">
                    <p>
                      <span class="line-height:2;">
                        <span class="font-size:18px;">
                          <span class="font-family:Times New Roman,Times,serif;">
                            <strong>Chọn tôm theo nhu cầu:</strong>
                          </span>
                        </span>
                      </span>
                    </p>

                    <ul data-sourcepos="57:5-59:0">
                      <li data-sourcepos="57:5-57:65">
                        <p>
                          <span class="line-height:2;">
                            <span class="font-size:18px;">
                              <span class="font-family:Times New Roman,Times,serif;">
                                Nếu bạn thích ăn thịt tôm săn ngọt, nên chọn tôm
                                càng xanh.
                              </span>
                            </span>
                          </span>
                        </p>
                      </li>
                      <li data-sourcepos="58:5-59:0">
                        <p>
                          <span class="line-height:2;">
                            <span class="font-size:18px;">
                              <span class="font-family:Times New Roman,Times,serif;">
                                Nếu bạn thích ăn tôm có nhiều gạch, nên chọn tôm
                                càng sen.
                              </span>
                            </span>
                          </span>
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
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
