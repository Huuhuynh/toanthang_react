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
        subheading={
          "BỔ SUNG MEN TIÊU HÓA ĐẬM ĐẶC GIÚP TÔM NONG TO ĐƯỜNG RUỘT, CẢI THIỆN HIỆN TƯỢNG PHÂN LỎNG TRÊN TÔM"
        }
        heading={
          <>
            C 14
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
              Bổ sung lợi khuẩn và enzyme giúp tôm tiêu hóa và hấp thu tốt dưỡng
              chất có trong thức ăn, nâng cao sức khỏe đường ruột cho tôm cải
              thiện hiện tượng phân lỏng, đứt khúc.
              <br />
              Giúp tôm lớn nhanh, giảm tiêu tốn thức ăn.
            </p>
            <p>
              HƯỚNG DẪN BẢO QUẢN: Bảo quản nơi khô ráo và thoáng mát. <br />
              THỜI GIAN NGƯNG SỬ DỤNG TRƯỚC KHI THU HOẠCH: Không <br />
              Cảnh báo: Tránh xa tầm tay trẻ em. <br />
              Khối lượng tịnh: 500g <br />
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
              Lactobacillus acidophilus (min)..............................
              2x109 Cfu/kg <br />
              Bacillus subtilis (min)......................... 4x1010 Cfu/kg{" "}
              <br />
              Saccharomyces cerevisiae (min)...................... 1x109 Cfu/kg{" "}
              <br />
              Amylase (min).......................................... 20.000
              UI/kg <br />
              Protease (min)...............................................
              50.000 UI/kg <br />
              Lipase (min)....................................................
              20.000 UI/kg <br />
              Chất đệm ( Dextrose) vừa đủ
              .......................................... 1 kg <br />
              Độ ẩm (max)....................................................
              10% <br />
              THÀNH PHẦN NGUYÊN LIỆU: <br />
              Lactobacillus acidophilus, Bacillus subtilis, Saccharomyces
              cerevisiae, Amylase, Protease, Lipase và dextrose.
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              Sử dụng định kỳ: 5g/1kg thức ăn, ngày 1 cữ, liên tục trong quá
              trình nuôi. <br />
              Khi đường ruột tôm nhỏ hoặc trống ruột dùng: 10g/1kg thức ăn, ngày
              2 cữ, liên tục 5 ngày. <br />
              Hòa tan C 14 với lượng nước vừa đủ, trộn đều vào thức ăn, áo lại
              để sau 30 phút mới cho ăn.
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
