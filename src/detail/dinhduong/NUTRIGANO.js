import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/dinhduong/NUTRIGANO.jpeg";

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
          "Thảo dược kháng khuẩn, kháng virus, chống oxy hóa tế bào trung hòa gốc tự do"
        }
        heading={
          <>
            NUTRIGANO
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
              -Ngăn cản virus, vi khuẩn xâm nhập vào tế bào, trung hòa gốc tự
              do, chống oxy hóa tế bào. <br />
              -Phòng bệnh và kết hợp với kháng sinh điều trị hiệu quả các bệnh
              về hô hấp, tiêu hóa trên heo, gia cầm và thủy cầm như: viêm phổi,
              viêm màng phổi, các bệnh hô hấp mãn tính CRD, C-CRD, viêm khớp do
              Mycoplasma, tụ huyết trùng, bệnh ORT, viêm xoang mũi, Gumboro,
              cúm, Newcastle, thương hàn, tiêu chảy do E.coli…. rút ngắn thời
              gian điều trị bệnh giúp thú phục hồi nhanh sau khi hết bệnh.{" "}
              <br />
              -Tạo môi trường lý tưởng cho vi sinh vật có lợi đường ruột phát
              triển và gia tăng mật số giúp thúc đẩy quá trình tiêu hóa và hấp
              thu. <br />
              -Tăng cường đáp ứng miễn dịch ,tăng hiệu quả sử dụng vaccine,
              chống stress, tăng cường chức năng tạo máu, giải độc gan, thận.{" "}
              <br />
            </p>
            <p>
              HƯỚNG DẪN BẢO QUẢN: Bảo quản nơi thoáng mát, tránh ánh nắng trực
              tiếp. <br />
              Cảnh báo: Tránh xa tầm tay trẻ em. <br />
              Sản xuất tại: Tyneside Nutrition Ltd, south Shields Business
              Works, Henry Robson Way, South Shields, Tyne & Wear, NE3 1RF,
              United Kingdom. Doanh nghiệp nhập khẩu, công bố chất lượng và chịu
              trách nhiệm đưa sản phẩm ra thị trường: Công ty TNHH SAGOPHAR; địa
              chỉ: 965/22/20 Quang Trung, Phường 14, Quận Gò Vấp, TP Hồ Chí
              Minh. <br />
              Nhà phân phối: CÔNG TY TNHH ĐẦU TƯ VÀ THƯƠNG MẠI DỊCH VỤ TOÀN
              THẮNG COMMERCE <br />
              TCCS: 09:2022/SGP <br />
              Mã số : 01-037892 <br />
              Thể tích thực: 1 lít <br />
              Ngày SX: xem trên bao bì. <br />
              Hạn dùng: 2 năm kể từ ngày sản xuất <br />
              CHỈ DÙNG TRONG CHĂN NUÔI
            </p>
          </Description>
        }
        description2={
          <Description2>
            <strong>THÀNH PHẦN: </strong>
            <p>
              Oregano Oil 5% ( carvacrol 3.66%, Thymol 0.105%). <br />
              Dung môi đặc biệt vừa đủ ……………………1 lít.
              <br />
              Canxi gluconate, Magnesium Sulfate, Potassium Chloride, Vitamin
              D3, Methionine và nước cất.
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              - Liều chung cho tất cả các loại gia súc, gia cầm, thủy cầm: 1ml/
              2-3 lít nước uống hoặc 1ml/ 10-20kg thể trọng dùng 2-3 ngày/ tuần,
              lặp lại hàng tuần. <br /> - Kết hợp điều trị bệnh: dùng liều gấp
              đôi, liên tục tới khi hết bệnh. <br />
              Đặc điểm: Chuyên dùng để kết hợp nâng cao hiệu quả của tất cả các
              loại thuốc và men tiêu hóa đường ruột khác thúc đẩy mạnh mẽ quá
              trình tiêu hóa và hấp thu, dùng phòng bệnh và rút ngắn thời gian
              điều trị bệnh.
              <br />
              Lắc đều trước khi sử dụng.
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
