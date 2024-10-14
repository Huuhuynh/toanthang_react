import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light";
import MainFeature from "../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../images/product/bg1.jpg";

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block text-lg`;
  const Description = tw.span`inline-block mt-8`;
  const Description2 = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  var token = localStorage.getItem('token');

  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature
        // subheading={<Subheading>Chống Stress</Subheading>}
        heading={
          <>
            Chống Stress
            {token === "true" ? (
              <HighlightedTextInverse>
                <p>1 lít/chai | 199,000 VNĐ | 20 chai/ thùng</p>
              </HighlightedTextInverse>
            ) : (
              <HighlightedText>Liên Hệ Giá</HighlightedText>
            )}
          </>
        }
        description={
          <Description>
            <strong>CÔNG DỤNG: </strong>
            <p>
              Sản phẩm được cân đối đặc biệt chuyên dùng để chống sốc, chống
              stress , chống gãy cơ, đục cơ khi sang tôm, giảm tỷ lệ hao hụt
              đáng kể, đặc biệt sang tôm giai đoạn tôm lớn, giúp tôm nhanh chóng
              hồi phục và thích nghi với môi trường nước mới. Chống stress trong
              trường hợp do thời tiết thay đổi. Chống stress do chỉ số môi
              trường ao nuôi biến động dẫn đến tôm dễ bị nhiễm bệnh, hao hụt đầu
              con.
            </p>
            <p>
              BẢO QUẢN: Bảo quản nơi khô ráo và thoáng mát. <br />
              Cảnh báo: Tránh xa tầm tay trẻ em <br />
              Thể tích thực: 1 lít <br />
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
            <strong>THÀNH PHẦN: Trong 1 lít sản phẩm </strong>
            <p>
              Ca ( min)………………90.000 mg/lít
              <br />
              Fe (min)………………………5.000 mg/lít
              <br />
              Cu (min) 5.000 mg/lít
              <br />
              Zn (min) 10.000 mg/lít
              <br />
              Mn (min) 5.000 mg/lít
              <br />
              Mg ( min)………………………60.000 mg/lít
              <br />
              K( min)………………………………..40.000 mg/lít
              <br />
              Glycin ( min)………………………………35.000 mg/lít
              <br />
              Dung môi đặc biệt vừa đủ………………………1 lít.
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG: </strong>
            <p>
              Chống stress do thời tiết thay đổi: 1 lít/ 2.000m3 nước. <br />{" "}
              Chống stress do chỉ số môi trường ao nuôi biến động: 1lít/ 1.500m3
              nước.
              <br />
              Chống sốc, chống gãy cơ khi sang tôm giai đoạn tôm dưới 45 ngày
              tuổi: 1lít/ 800m3 nước. <br /> Chống sốc, chống gãy cơ khi sang
              tôm giai đoạn tôm trên 45 ngày tuổi: 1lít/ 500m3 nước.
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
