import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/dinhduong/VITAAMIN.png";

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block text-base`;
  const Description = tw.span`inline-block mt-6`;
  const Description2 = tw.span`inline-block`;
  const imageCss = tw`rounded-4xl`;
  var token = localStorage.getItem("token");

  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature
        subheading={"GIA TĂNG MIỄN DỊCH - CHỐNG STRESS TĂNG TỈ LỆ SỐNG"}
        heading={
          <>
            VITA - AMIN
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
              Cung cấp vitamin và acid amin giúp tôm cân bằng dinh dưỡng, tăng
              cường khả năng miễn dịch, tăng tỷ lệ sống, tránh hao hụt đầu con,
              giải độc gan tụy giúp tôm lướt qua các bệnh thường gặp do thay đổi
              thời tiết, sức đề kháng suy yếu. <br />
              Chống stress do thời tiết thay đổi, biến động môi trường ao nuôi
              tôm. <br />
              Giúp tôm tăng trưởng và phát triển tốt.
            </p>
            <p>
              HƯỚNG DẪN BẢO QUẢN: Bảo quản nơi khô ráo và thoáng mát. <br />
              THỜI GIAN NGƯNG SỬ DỤNG TRƯỚC KHI THU HOẠCH: Không
              <br />
              Cảnh báo: Tránh xa tầm tay trẻ em.
              <br />
              Khối lượng tịnh: 500g <br />
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
            <strong>THÀNH PHẦN: </strong>
            <p>
              β-Glucan (min)............100.000mg/kg <br /> Vitamin B6
              (min)....... 1.000 mg/kg
              <br />
              Vitamin A (min)......... 1.000.000 UI/kg <br /> Vitamin B12
              (min)........ 50 mg/kg
              <br />
              Vitamin D3 (min).......... 2.000 UI/kg <br /> Folic acid
              (min)......... 1.000 mg/kg
              <br />
              Vitamin E (min)............. 1.000 mg/kg <br /> Sorbitol
              (min)....... 100.000 mg/kg
              <br />
              Vitamin C (min)............. 10.000 mg/kg <br /> Inositol
              (min)......... 50.000 mg/kg
              <br />
              Vitamin B1 (min).......... 2.000 mg/kg <br /> Lysine (min)........
              25.000 mg/kg
              <br />
              Vitamin B2 (min)......... 2.000 mg/kg <br /> Methionine
              (min)......... 8.000 mg/kg
              <br />
              Vitamin B5 (min).........2.000 mg/kg <br /> Chất đệm (lactose) vừa
              đủ..... 1kg
              <br />
              Độ ẩm (max)......................... 10%
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              Sử dụng định kỳ: 2g/1kg thức ăn, ngày 2 cữ, liên tục 3 ngày/ tuần.{" "}
              <br />
              Tăng cường miễn dịch: 4g/1kg thức ăn, ngày 2 cữ, liên tục 3 ngày/
              tuần <br />
              Hòa tan VITA - AMIN với lượng nước vừa đủ, trộn đều vào thức ăn,
              áo lại để 30 phút, mới cho tôm ăn.
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
