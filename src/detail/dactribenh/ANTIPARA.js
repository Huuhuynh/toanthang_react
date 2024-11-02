import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/dactribenh/ANTIPARA.png";

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block text-base`;
  const Description = tw.span`inline-block mt-8`;
  const Description2 = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  var token = localStorage.getItem("token");

  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature
        subheading={
          "NGĂN NGỪA HIỆN TƯỢNG TÔM CHẾT SỚM DO BỆNH TPD TĂNG TỶ LỆ SỐNG, GIẢM HAO HỤT ĐÀU CON"
        }
        heading={
          <>
            PL – ANTIPARA
            {/* <br/>
            {token === "true" ? (
              <HighlightedTextInverse>
                <p>200g/lon | 310,000 VNĐ | 30 lon/ thùng</p>
                <p>500g/lon | 775,000 VNĐ | 30 lon/ thùng</p>
                <p>1kg/lon | 1,540,000 VNĐ | 20 lon/ thùng</p>
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
              Phục hồi chức năng gan, giải độc gan, ngăn ngừa hiện tượng tôm
              chết sớm ở giai đoạn mới thả đến khi sang ao, tránh hiện tượng
              xanh gan, trắng mình, gan mờ, vàng gan, trắng gan, teo gan, gia
              tăng tỷ lệ sống, tránh hao hụt đầu con, giúp tôm tăng trưởng và
              phát triển tốt.
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
            <strong>THÀNH PHẦN: Trong 1 kg sản phẩm </strong>
            <p>
              Inositol ( min)……………………………2.000mg/kg
              <br />
              Arginine (min)……………………………5.000mg/kg
              <br />
              Methionine (min) ………………...........5.000mg/kg
              <br />
              Chất đệm (Lactose, Dextrose) vừa đủ……………………..1kg
              <br />
              Độ ẩm (max)........................................10%.
              <br />
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              Dùng trộn ăn: <br />
              Định kỳ phòng bệnh: 5g/1kg thức ăn, ngày 1 cữ, liên tục 3 ngày/3
              ngày dùng 1 đợt tới khi sang tôm. <br />
              Khi tôm có dấu hiệu trắng mình, xanh gan : 10g/1kg thức ăn, ngày 2
              cữ, liên tục 5 ngày. <br />
              Dùng tạt : <br />
              Tạt 1kg/1.500m3 nước, ngày 1 lần, vào các ngày 3, 6, 10, 15 sau
              khi thả tôm. <br />
              Hòa tan PL - ANTIPARA với lượng nước vừa đủ, trộn đều vào thức ăn,
              áo để lại sau 30 phút, mới cho tôm ăn hoặc dùng tạt trực tiếp
              xuống ao nuôi.
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
