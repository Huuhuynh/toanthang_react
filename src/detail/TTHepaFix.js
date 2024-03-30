import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import TabGrid from "../components/cards/TabCardGrid.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light";
import MainFeature from "../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../images/product/bg2.jpg";

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
        // subheading={<Subheading>Chống Stress</Subheading>}
        heading={
          <>
            TT – HEPA FIX
            {token === "true" ? (
              <HighlightedTextInverse>
                <p>200g/lon | 310,000 VNĐ | 30 lon/ thùng</p>
                <p>500g/lon | 775,000 VNĐ | 30 lon/ thùng</p>
                <p>1kg/lon | 1,540,000 VNĐ | 20 lon/ thùng</p>
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
              Bổ sung sobitol giúp giải độc gan, tái tạo tế bào gan, hỗ trợ chức
              năng gan, ngăn ngừa các dấu hiệu trên gan tôm như: Tôm bị vàng
              gan, sưng gan, trắng gan, gan mờ, giúp tôm tăng trưởng và phát
              triển tốt.
            </p>
            <p>
              BẢO QUẢN: Bảo quản nơi khô ráo và thoáng mát. <br />
              Cảnh báo: Tránh xa tầm tay trẻ em <br />
              Khối lượng tịnh: 500g <br />
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
              Sorbitol (min) 100.000 mg <br />
              Chất đệm (Dextrose) vừa đủ 1kg <br />
              Độ ẩm (max) 10%
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG: </strong>
            <p>
              Hòa tan với nước trộn vào thức ăn hoặc tạt trực tiếp xuống ao
              nuôi. <br />
              Dùng định kỳ: 5g/1kg thức ăn, ngày 2 cữ, liên tục 2 - 3 ngày, 1
              tháng dùng từ 1 - 2 đợt. <br />
              Tạt trực tiếp xuống ao nuôi: 1kg/1.500m3 nước, 1 tháng tạt từ 1 -
              2 đợt. <br />
              Khi gan tôm có các dấu hiệu như trên: dùng liều gấp đôi, liên tục
              từ 5 -7 ngày. <br />
              Hòa tan TT – HEPA FIX với lượng nước vừa đủ, trộn đều vào thức ăn
              hoặc hòa tan vào nước tạt đều khắp ao.
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
