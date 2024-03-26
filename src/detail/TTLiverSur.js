import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import TabGrid from "../components/cards/TabCardGrid.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light";
import MainFeature from "../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../images/product/bg7.jpg";

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
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
            TT – LIVER SUR
            <wbr />{" "}
            {token === "true" ? (
              <HighlightedText>300000 VNĐ</HighlightedText>
            ) : (
              <HighlightedText>Liên Hệ Giá</HighlightedText>
            )}
          </>
        }
        description={
          <Description>
            <strong>CÔNG DỤNG: </strong>
            <p>
              TT – LIVER SUR dùng ức chế mầm bệnh gây bệnh trên tôm, phục hồi
              chức năng gan, tránh hiện tượng gan mờ, vàng gan, sưng gan, trống
              ruột, phân lỏng, phân trắng.
              <br />
              Tăng tỷ lệ sống, giảm hao hụt đầu con, đặc biệt trong giai đoạn
              ươn vèo, tối đa hóa sức khỏe gan, tụy và đường ruột tôm.
            </p>
            <p>
              BẢO QUẢN: Bảo quản nơi khô ráo và thoáng mát. <br />
              Cảnh báo: Tránh xa tầm tay trẻ em <br />
              Khối lượng tịnh: 1 lít <br />
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
              Lactic acid (min) 5.000mg <br />
              Dung môi vừa đủ 1 lít
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG: </strong>
            <p>
              Định kỳ: 10ml/1kg thức ăn, ngày 1 lần, dùng 2-3 ngày/tuần, lập lại
              hàng tuần. <br />
              Khi tôm có dấu hiệu bệnh dùng tạt: 1 lít/1.000-2.000m3
              nước/ngày 1 lần/ liên tục từ 2-3 ngày.
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
