import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/dinhduong/SUPER_CANXI.png";

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
          "CUNG CẤP KHOÁNG CHẤT CẦN THIẾT CHO TÔM, GIÚP KÍCH THÍCH TẠO VỎ VÀ NHANH CỨNG VỎ SAU KHI LỘT XÁC, VỎ TÔM BÓNG ĐẸP SAU 2 GIỜ SỬ DỤNG"
        }
        heading={
          <>
            SUPER CANXI
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
              Cung cấp khoáng chất cần thiết vào thức ăn, giúp tôm cân bằng dinh
              dưỡng, kích thích quá trình tạo vỏ và nhanh cứng vỏ sau khi lột
              xác.
              <br />
              Tạt trực tiếp xuống ao nuôi tôm giúp tôm nhanh cứng vỏ tránh sự
              xâm nhập của mầm bệnh, vỏ tôm bóng đẹp tăng giá trị thương phẩm.
            </p>
            <p>
              HƯỚNG DẪN BẢO QUẢN: Bảo quản nơi khô ráo và thoáng mát. <br />
              THỜI GIAN NGƯNG SỬ DỤNG TRƯỚC KHI THU HOẠCH: Không <br />
              Cảnh báo: Tránh xa tầm tay trẻ em. <br />
              Thể tích thực: 1lit <br />
              Mã số: <br />
              TCCS <br />
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
            <strong>THÀNH PHẦN: </strong>
            <p>
              Calcium (min)...............................................
              50.000 mg/lít <br />
              Magnesium (min).......................................... 50.000
              mg/lít
              <br />
              Sodium (min)................................................
              15.000 mg/lít
              <br />
              Potassium (min)..............................................
              7.000 mg/lít
              <br />
              Zinc
              (min)............................................................
              40 mg/lít
              <br />
              Cobalt
              (min)......................................................... 60
              mg/lít
              <br />
              Dung môi (nước RO) vừa đủ.........................................
              1 lít
              <br />
              THÀNH PHẦN NGUYÊN LIỆU:
              <br />
              Canxi gluconate, Magnesium Sulfate, Sodium Chloride, Potassium
              Chloride, cobalt sulphate, Zinc Sulfate và nước RO.
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              Dùng 5ml/1kg thức ăn, ngày 2 cữ, liên tục trong quá trình nuôi.{" "}
              <br />
              Khi tôm có dấu hiệu lột xác hoặc vỏ sần sùi, cong thân: sử dụng
              tạt 1 lít/1.000m3 nước <br />
              Trước khi xuất bán 2 giờ: tạt 1 lít/700m3 nước.
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
