import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/dinhduong/PROTAMIN.png";

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
          "CHỐNG SỐC, CHỐNG STRESS GIÚP TÔM HỒI PHỤC NHANH SAU KHI SANG AO"
        }
        heading={
          <>
            PROTAMIN
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
              Cung cấp vitamin, acid amin thiết yếu và khoáng điện giải cần
              thiết giúp tôm chống sốc, chống stress, phục hồi nhanh sau khi
              bệnh. Gia tăng sức đề kháng trong trường hợp thời tiết thay đổi,
              biến động môi trường ao nuôi. Dùng trong trường hợp vận chuyển tôm
              hoặc tôm sang ao, chống sốc môi trường khi thả tôm.
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              Định kỳ: 5g/1kg thức ăn, ngày 1 cữ, liên tục 3 ngày/ tuần.%
              <br />
              Sử dụng tạt trước khi sang ao hoặc chống sốc: 1kg/1.000m3 nước%
              <br />
              Trộn đều với thức ăn, áo lại bằng dầu mực sau đó cho tôm ăn, hoặc
              sử dụng tạt trực tiếp xuống ao nuôi theo liều khuyến cáo như trên.
            </p>
            <strong>THÀNH PHẦN: Trong 1 kg sản phẩm </strong>
            <p>
              Vitamin B1 (min) …5.000 mg/kg <br /> Sorbitol (min)…....20.000
              mg/kg
              <br />
              Vitamin B2 (min) …..2.000 mg/kg <br /> Inositol ( min)………10.000
              mg/kg
              <br />
              Vitamin B6 (min) ..3.000 mg/kg <br /> Sodium chloride (min)...
              7.000 mg/kg
              <br />
              Vitamin B12 (min)…40 mg/kg <br /> Potassium chloride (min)12.000
              mg/kg
              <br />
              Vitamin C (min) ……50.000 mg/kg <br /> Acid citric (min) …..20.000
              mg/kg
              <br />
              Lysine (min)…… 60.000 mg/kg <br /> Fe (min)……2.000 mg/kg
              <br />
              Zn (min)……2.000mg/kg <br /> Cu (min)….……1.500 mg/kg
              <br />
              Methionine (min) ……5.000 mg/kg <br /> Chất đệm (lactose) vừa đủ
              ... 1 kg
              <br />
              Độ ẩm (max) ……………………………10%
              <br />
              THÀNH PHẦN NGUYÊN LIỆU: <br />
              Vitamin B1, Vitamin B2, vitamin B6, vitamin B12, vitamin C,
              Sorbitol, inositol, sodium chloride, potassium chloride, acid
              citric, lysine, methionine, sắt sulfat, đồng sulfat, kẽm sulfat và
              lactose.
            </p>

            <p>
              HƯỚNG DẪN BẢO QUẢN: Bảo quản nơi khô ráo và thoáng mát. <br />
              THỜI GIAN NGƯNG SỬ DỤNG TRƯỚC KHI THU HOẠCH: Không <br />
              Cảnh báo: Tránh xa tầm tay trẻ em. <br />
              Khối lượng tịnh: 500g <br />
              Hạn dùng: 2 năm kể từ ngày sản xuất <br />
              CHỈ DÙNG TRONG NUÔI TRỒNG THỦY SẢN <br />
              Sản phẩm không chứa các chất cấm sử dụng trong sản xuất, kinh
              doanh thủy sản theo các quy định hiện hành của Bộ NN&PTNT
            </p>
          </Description>
        }
        description2={<Description2></Description2>}
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
