import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/dinhduong/canxione.png";

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
          "CUNG CẤP CANXI VÀ VITAMIN D3 CẦN THIẾT CHO QUÁ TRÌNH CHUYỂN HÓA VÀ HẤP THU CANXI, KÍCH THÍCH QUÁ TRÌNH TẠO VỎ VÀ NHANH CỨNG VỎ SAU KHI LỘT XÁC"
        }
        heading={
          <>
            CANXI ONE
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
              Cung cấp các VITAMIN D3, acid amin và khoáng chất đậm đặc vào thức
              ăn giúp tôm cân bằng dinh dưỡng, tang cường quá trình chuyển hóa
              và hấp thu canxi, ngừa rối loạn hấp thu canxi, kích thích quá
              trình tạo vỏ và nhanh cứng vỏ sau khi lột xác. Phòng ngừa tình
              trạng thiếu hụt khoáng dẫn đến tôm bị cong thân, đục cơ, mềm vỏ,
              rớt cục thịt…
            </p>
            <p>
              HƯỚNG DẪN BẢO QUẢN: Bảo quản nơi khô ráo và thoáng mát, tránh ánh
              nắng trực tiếp. <br />
              THỜI GIAN NGƯNG SỬ DỤNG TRƯỚC KHI THU HOẠCH: Không <br />
              Cảnh báo: Tránh xa tầm tay trẻ em. <br />
              Thể tích thực: 1 Lít <br />
              Hạn dùng: 2 năm kể từ ngày sản xuất <br />
              CHỈ DÙNG TRONG NUÔI TRỒNG THỦY SẢN <br />
            </p>
          </Description>
        }
        description2={
          <Description2>
            <strong>THÀNH PHẦN: Trong 1 kg sản phẩm </strong>
            <p>
              Calcium (min)…………………….……..200.000mg/lít. <br />
              Magnesium(min)……………………...…15.000mg/lít. <br />
              Potassium (min)………………………..….40.000mg/lít. <br />
              Vitamin D3 (min)………………..……1.500.000 IU/lít. <br />
              Methionine ( min)…………………………..5.000mg/lít. <br />
              Dung môi (nước cất) vừa đủ………………….…..1 lít
              <br />
              Canxi gluconate, Magnesium Sulfate, Potassium Chloride, Vitamin
              D3, Methionine và nước cất.
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              Định kỳ bổ sung khoáng: 5ml/1kg thức ăn, ngày 1 cữ, liên tục trong
              quá trình nuôi. <br />
              Tôm bị cong thân, đục cơ, mềm vỏ, rớt cục thịt: 10ml/1kg thức ăn,
              ngày 2 cữ, liên tục 3 ngày. <br />
              Hoặc sử dụng tạt trực tiếp xuống ao nuôi với liều 1 lít/2000m3
              nước. <br />
              Cách dùng: Hòa tan vào nước sạch, rưới đều lên thức ăn, áo lại để
              sau 30 phút mới cho tôm ăn hoặc sử dụng tạt trực tiếp xuống ao
              nuôi.
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
