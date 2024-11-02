import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/dinhduong/CHELATE.png";

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
        subheading={" HỖN HỢP KHOÁNG - VITAMIN ĐẬM ĐẶC"}
        heading={
          <>
            CHELATE
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
              Cung cấp các vitamin, acid amin và khoáng chất đậm đặc vào thức ăn
              giúp tôm cân bằng dinh dưỡng, kích thích quá trình tạo vỏ và nhanh
              cứng vỏ sau khi lột xác. Phòng ngừa tình trạng thiếu hụt khoáng
              dẫn đến tôm bị cong thân, đục cơ, mềm vỏ,đặc biệt tôm nuôi mật độ
              dày.
            </p>
            <p>
              HƯỚNG DẪN BẢO QUẢN: Bảo quản nơi khô ráo và thoáng mát. <br />
              THỜI GIAN NGƯNG SỬ DỤNG TRƯỚC KHI THU HOẠCH: Không
              <br />
              Cảnh báo: Tránh xa tầm tay trẻ em.
              <br />
              Khối lượng tịnh: 1kg
              <br />
              Mã số: <br />
              TCCS 02:
              <br />
              Ngày SX: <br />
              Hạn dùng: 2 năm kể từ ngày sản xuất.
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
              Vitamin A (min).. 2.000.000 UI/kg <br /> Methionine (min)...
              10.000 mg/kg
              <br />
              Vitamin D3 (min).. 1.000.000 UI/kg <br /> Lysine (min)........
              20.000 mg/kg
              <br />
              Vitamin E (min)........... 3.000 mg/kg <br /> Fe (min)............
              4.000 mg/kg
              <br />
              Vitamin B1 (min).............. 2.000 mg/kg <br /> Cu
              (min)................ 9.000 mg/kg
              <br />
              Vitamin B2 (min).......... 2.000 mg/kg <br /> Zn (min)...........
              4.000 mg/kg
              <br />
              Vitamin B6 (min).... 2.000 mg/kg <br /> Mn (min)........ 5.000
              mg/kg
              <br />
              Vitamin B12 (min).......10 mg/kg <br /> Độ ẩm
              (max)................ 10%
              <br />
              Vitamin C (min).......100.000 mg/kg <br />
              Chất đệm (Dextrose, lactose) vừa đủ 1 kg
              <br />
              THÀNH PHẦN NGUYÊN LIỆU:
              <br />
              Vitamin A, vitamin D3, vitamin E, vitamin C, vitamin B1, vitamin
              B2, vitamin B6, vitamin B12, lysine, methionine, sắt sulfat, đồng
              sulfat, kẽm sulfat, Mangan sulfat và Dextrose, lactose.
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              Định kỳ bổ sung khoáng: 3g/1kg thức ăn, ngày 1 cữ, liên tục trong
              quá trình nuôi. <br />
              Tôm bị cong thân, đục cơ: 6g/1kg thức ăn, ngày 2 cữ, liên tục 3
              ngày. <br />
              Hoặc sử dụng tạt trực tiếp xuống ao nuôi với liều 1kg/2.000m3
              nước. <br />
              Cách dùng: hòa tan vào nước sạch, rưới đều lên thức ăn, áo lại để
              sau 30 phút mới cho tôm ăn hoặc sử dụng tạt trực tiếp xuống ao
              nuôi
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
