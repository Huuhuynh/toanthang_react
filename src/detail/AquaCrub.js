import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light";
import MainFeature from "../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../images/product/bg18.jpg";

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
            AQUA CRUB
            <br />
            {token === "true" ? (
              <HighlightedTextInverse>
                <p>200g/lon | 280,000 VNĐ | 40 lon/ thùng</p>
                <p>500g/lon | 685,000 VNĐ | 30 lon/ thùng</p>
                <p>1kg/lon | 1,360,000 VNĐ | 20 lon/ thùng</p>
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
              Bổ sung lợi khuẩn vào thức ăn giúp tôm tiêu hóa và hấp thụ tốt
              thức ăn, nâng cao sức khỏe đường ruột giảm hiện tượng phân lỏng,
              phân trắng, đường ruột nhỏ, trống đường ruột. Ổn định hệ lợi
              khuẩn, giảm hao hụt đầu con, đặc biệt đối với tôm trong giai đoạn
              ương gièo, cải thiện tối đa sức khỏe và tốc độ tăng trưởng của
              tôm. Cải thiện hệ số chuyển đổi thức ăn (FCR).
            </p>
            <p>
              BẢO QUẢN: Bảo quản nơi khô ráo và thoáng mát. <br />
              THỜI GIAN NGƯNG SỬ DỤNG TRƯỚC KHI THU HOẠCH: Không Cảnh báo: Tránh
              xa tầm tay trẻ em <br />
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
              Enterococcus faecium (min) 1,4x1012 Cfu/kg <br />
              Bacillus subtilis (min)……………………….………………...5x1011 Cfu/kg <br />
              Lactobacillus rhamnosus (min) 6x1011 Cfu/kg <br />
              Chất đệm ( Dextrose) vừa đủ 1 kg <br />
              Độ ẩm (max) 10%
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG: </strong>
            <p>
              Liều phổ thông: 1g/1kg thức ăn, ngày 1 cữ, liên tục 3-4 ngày/
              tuần. <br />
              Tôm có dấu hiệu rối loạn tiêu hóa: 2g/1kg thức ăn, ngày 2 cữ, liên
              tục tới khi hết bệnh. <br />
              Hòa tan AQUA CRUB với lượng nước vừa đủ rồi trộn đều vào thức ăn,
              để ráo trước khi cho ăn.
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
