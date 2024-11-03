import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light";
import MainFeature from "../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../images/product/bg17.png";

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
        subheading={'LÀM DÀY THÀNH RUỘT TÔM, BẢO VỆ VÀ PHÁT TRIỂN NHUNG MAO RUỘT GIÚP TÔM SINH TRƯỞNG VÀ PHÁT TRIỂN TỐT'}
        heading={
          <>
            NUTRI PRO
            {/* {token === "true" ? (
              <HighlightedTextInverse>
                <p>500g/lon | 180,000 VNĐ | 30 lon/ thùng</p>
                <p>1kg/lon | 350,000 VNĐ | 20 lon/ thùng</p>
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
              Bảo vệ sức khỏe đường ruột tôm, làm dày thành ruột, phục hồi, bảo
              vệ và phát triển nhung mao ruột, ngăn ngừa hiện tượng đường ruột
              mờ, mỏng, mất đường ruột. Tăng khả năng hấp thu, kết dính và loại
              thải vi khuẩn có hại trong đường ruột, giúp tôm sinh trưởng và
              phát triển tốt.
            </p>
            <p>
              HƯỚNG DẪN BẢO QUẢN: Bảo quản nơi thoáng mát, tránh ánh nắng trực
              tiếp. <br />
              THỜI GIAN NGƯNG SỬ DỤNG TRƯỚC KHI THU HOẠCH: Không <br />
              Cảnh báo: Tránh xa tầm tay trẻ em. <br />
              Khối lượng tịnh: 500g <br />
              Mã số: <br />
              TCCS: <br />
              Ngày SX: <br />
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
              Selenium (min) 50.000 mg/kg <br />
              Vitamin E (min) 3.000 mg/kg <br />
              Độ ẩm (max) 10 % <br />
              Chất đệm (lactose) vừa đủ 1kg
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG: </strong>
            <p>
              Dùng 4g/1kg thức ăn, ngày 1 cữ, liên tục trong quá trình nuôi.{" "}
              <br />
              Khi tôm hấp thu kém, đường ruột tôm nhỏ, mờ: dùng 8g/1kg thức ăn,
              ngày 2 cữ, liên tục 5 ngày. <br />
              Hòa tan NUTRI-PRO vào nước, trộn đều với thức ăn, áo lại bằng dầu
              áo, sau đó cho tôm ăn. <br />
              HƯỚNG DẪN BẢO QUẢN: Bảo quản nơi thoáng mát, tránh ánh nắng trực
              tiếp.
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
