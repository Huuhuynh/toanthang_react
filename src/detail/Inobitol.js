import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light";
import MainFeature from "../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../images/product/bg6.png";

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const Description2 = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature
        subheading={'GIẢI ĐỘC GAN, TÁI TẠO TẾ BÀO GAN TRÊN TÔM'}
        heading={
          <>
            INOBITOL
            {/* <wbr /> <HighlightedText>Liên Hệ Giá</HighlightedText> */}
          </>
        }
        description={
          <Description>
            <strong>CÔNG DỤNG: </strong>
            <p>
              Cung cấp Inositol và các chất dinh dưỡng cần thiết giúp giải độc
              gan, phục hồi và tái tạo tế bào gan. Cải thiện hiện tượng gan tôm
              có màu sắc nhợt nhạt, gan mờ hoặc sử dụng sau liệu pháp điều trị
              bằng kháng sinh. Giúp tôm khỏe mạnh.
              <br />
              Tăng cường hệ miễn dịch, tăng khả năng tiêu hóa và hấp thu triệt
              để thức ăn. <br />
              Chống stress cho tôm.
            </p>
            <p>
              HƯỚNG DẪN BẢO QUẢN: Bảo quản nơi khô ráo và thoáng mát. <br />
              THỜI GIAN NGƯNG SỬ DỤNG TRƯỚC KHI THU HOẠCH: Không
              <br />
              Cảnh báo: Tránh xa tầm tay trẻ em.
              <br />
              Khối lượng tịnh: 500g
              <br />
              Mã số: <br />
              TCCS <br />
              Ngày SX: <br />
              Hạn dùng: 2 năm kể từ ngày sản xuất
              <br />
              CHỈ DÙNG TRONG NUÔI TRỒNG THỦY SẢN
              <br />
              Sản phẩm không chứa các chất cấm sử dụng trong sản xuất, kinh
              doanh thủy sản theo các quy định hiện hành của Bộ NN&PTNT
            </p>
          </Description>
        }
        description2={
          <Description2>
            <strong>THÀNH PHẦN: Trong 1 lít sản phẩm </strong>
            <p>
              Inositol (min) 45.000 mg/kg
              <br />
              Sorbitol (min) 95.000 mg/kg
              <br />
              Phosphoric acid (min) 50.000 mg/kg
              <br />
              Selenium (min) 30.000 mg/kg
              <br />
              Vitamin C (min) 30.000 mg/kg
              <br />
              Vitamin E (min) 5.000 mg/kg
              <br />
              Methionine (min) 20.000 mg/kg
              <br />
              Chất đệm (lactose) vừa đủ 1kg
              <br />
              Độ ẩm (max) 10%
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG: </strong>
            <p>
              Định kỳ: 2g/1kg thức ăn, ngày 2 cữ, liên tục 2 ngày/tuần. <br />
              Sau khi điều trị bệnh: 4g/1kg thức ăn, ngày 2 cữ, liên tục 3 ngày.{" "}
              <br />
              Hòa sản phẩm với lượng nước vừa đủ rồi trộn đều vào thức ăn, để
              ráo trước khi cho ăn.
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
