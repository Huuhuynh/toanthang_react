import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light";
import MainFeature from "../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../images/product/bg3.png";

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block text-lg`;
  const Description = tw.span`inline-block mt-8`;
  const Description2 = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  var token = localStorage.getItem("token");

  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature
        subheading={'VI SINH CHUYÊN XỬ LÝ NHỚT BẠT, XÁC TẢO TÀN, PHÂN HỦY NHANH CÁC CHẤT HỮU CƠ, XỬ LÝ KHÍ ĐỘC NH3'}
        heading={
          <>
            TTZ
            <br/>
            {/* {token === "true" ? (
              <HighlightedTextInverse>
                <p>350g/gói | 300,000 VNĐ | 40 gói/ thùng</p>
              </HighlightedTextInverse>
            ) : (
              <HighlightedText>Liên Hệ Giá</HighlightedText>
            )} */}
          </>
        }
        description={
          <Description>
            <strong>CÔNG DỤNG: </strong>
            <p>
              Phân hủy nhanh các chất hữu cơ, thức ăn dư thừa, phân của tôm, làm
              sạch đáy ao, xử lý hiện tượng nhớt đáy ao nuôi lót bạt. <br />
              Khử mùi hôi, làm sạch và ổn định môi trường nước. <br />
              Giảm các khí độc NH3, H2S có trong ao nuôi.
            </p>
            <p>
              BẢO QUẢN: Bảo quản nơi khô ráo và thoáng mát. <br />
              THỜI GIAN NGƯNG SỬ DỤNG TRƯỚC KHI THU HOẠCH: Không Cảnh báo: Tránh
              xa tầm tay trẻ em <br />
              Khối lượng tịnh: 350g <br />
              Mã số: <br />
              TCCS <br />
              Ngày SX: Xem trên bao bì <br />
              Hạn dùng: 2 năm kể từ ngày sản xuất <br />
              CHỈ DÙNG TRONG NUÔI TRỒNG THỦY SẢN <br />
              Sản phẩm không chứa các chất cấm sử dụng trong sản xuất, kinh
              doanh thủy sản theo các quy định hiện hành của Bộ NN&PTNT
            </p>
          </Description>
        }
        description2={
          <Description2>
            <strong>THÀNH PHẦN: Trong 1 kg sản phẩm </strong>
            <p>
              Bacillus subtilis (min) 3x1010 cfu/kg
              <br />
              Lactobacillus plantarum (min) 1x109 cfu/kg
              <br />
              Saccharomyces cerevisiae (min) 1x109 cfu/kg
              <br />
              Amylase (min) 20.000 UI/kg
              <br />
              Protease (min) 50.000 UI/kg
              <br />
              Cellulase (min) 20.000 UI/kg
              <br />
              Chất đệm (Dextrose) vừa đủ 1kg
              <br />
              Độ ẩm (max) 10%
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG: </strong>
            <p>
              Trước khi thả giống 3 ngày: Dùng 350g/ 2.000m3 nước. <br />
              Tháng thứ 1&2 dùng: Dùng 350g/ 4.000m3, định kỳ 7 ngày 1 lần.
              <br />
              Tháng thứ 3 trở lên: Dùng 350g/ 3.000m3 nước, định kỳ 7 ngày 1
              lần.
              <br />
              Khi ao nuôi bị nhớt bạt, sụp tảo, khí độc cao: Dùng 350g/2.000m3
              nước. <br />
              Hòa tan 350g TTZ cho 20 lít nước sạch, sau đó tạt đều khắp ao,
              thời điểm sử dụng tốt nhất từ 9 -11 giờ sáng.
            </p>
          </Description2>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Liên hệ"
        imageSrc={InstructionImage_1}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
