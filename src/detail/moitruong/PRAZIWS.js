import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/moitruong/PRAZIWS.png";

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
        subheading={"ỨC CHẾ EHP PHÁT TRIỂN BÊN TRONG ĐƯỜNG RUỘT TÔM"}
        heading={
          <>
            PRAZI WS
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
              Định kỳ phòng và ức chế vi bào tử trùng Enterocytozoon
              hepatopenaei (EHP) xâm nhập và phát triển gây bệnh trên tôm như:
              tôm giảm ăn, chậm lớn, phân đàn, đục cơ, mủ đuôi, ruột lò xo,
              phình to không đều, ruột chuyển sang màu vàng hoặc hồng, phân
              lỏng, phân trắng, gan mờ, hoại tử gan, đen mang, hoại tử mang, tôm
              rớt râm trị không đứt.
            </p>
            <p>
              Chống chỉ định: không. <br />
              Điều kiện bảo quản: nơi khô thoáng dưới 300c tránh ánh sáng và ẩm.{" "}
              <br />
              Khối lượng tịnh: <br />
              Mã số: <br />
              SĐK: HCM.TS85-07 <br />
              Ngày SX: <br />
              Hạn dùng: <br />
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
              Praziquantel.................................................................
              20g <br />
              Ta dược đặc biệt vừa đủ................................. 1kg
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              Liều dùng: hòa tan vào nước trộn vào thức ăn. <br />
              Phòng EHP: 3g/1kg thức ăn, ngày 2 cữ, liên tục 2 – 3 ngày, 10 ngày
              1 đợt. <br />
              Khi tôm có dấu hiệu bệnh như trên: 5g/1kg thức ăn. Ngày 2 cữ, liên
              tục 3 ngày. <br />
              Kết hợp tạt 1 lít/1.500 – 2.000 m3 nước/ngày 1 lần/tạt ngày 1 và
              3. <br />
              Hướng dẫn sử dụng: <br />
              Hòa tan PRAZI WS với lượng nước vừa đủ, trộng đều vào thức ăn, sau
              30 phút mới cho ăn. <br />
              Thời gian ngưng sử dụng thuốc: ngưng sử dụng 3 ngày trước khi thu
              hoạch.
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
