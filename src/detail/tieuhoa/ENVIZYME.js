import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/tieuhoa/ENVIZYME.png";

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
          "BỔ SUNG CÁC ENZYME GIÚP TÔM TIÊU HÓA VÀ HẤP THU TỐT DƯỠNG CHẤT CÓ TRONG THỨC ĂN, TẠT TRỰC TIẾP XUỐNG AO GIÚP SẠCH NƯỚC – SẠCH ĐÁY AO"
        }
        heading={
          <>
            ENVIZYME
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
              Bổ sung các loại enzyme cho hệ tiêu hóa của tôm. Giúp tôm tiêu hóa
              và hấp thu tốt các dưỡng chất có trong thức ăn, từ đó cải thiện
              môi trường nước ao nuôi.
              <br /> Giúp tôm lớn nhanh, giảm hệ số tiêu tốn thức ăn. <br />
              Tạt trực tiếp xuống ao khi nước ao bị ô nhiễm như: nước ao bi keo,
              tảo tàn, nhớt đáy, giúp phân hủy thức ăn thừa, phân tôm.
            </p>
            <p>
              HƯỚNG DẪN BẢO QUẢN: Bảo quản nơi khô ráo và thoáng mát.
              <br />
              THỜI GIAN NGƯNG SỬ DỤNG TRƯỚC KHI THU HOẠCH: Không
              <br />
              Cảnh báo: Tránh xa tầm tay trẻ em.
              <br />
              Khối lượng tịnh: 500g
              <br />
              Mã số: <br />
              TCCS <br />
              Ngày SX: <br />
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
              Amylase (min)............ 5.000.000 UI/kg <br /> Lipase
              (min).......... 40.000 UI/kg <br />
              Protease (min)... 1.500.000 UI/kg <br /> Beta glucanase
              (min)...... 20.000 UI/kg <br />
              Xylanase (min)........... 500.000 UI/kg <br /> Cellulase
              (min).......... 60.000 UI/kg <br />
              Phytase (min).............. 90.000 UI/kg <br /> Chất đệm (lactose)
              vừa đủ ...... 1kg <br />
              Pectinase (min)............ 50.000 UI/kg <br /> Độ ẩm
              (max).................... 10% <br />
              THÀNH PHẦN NGUYÊN LIỆU: <br />
              Protease, amylase, phytase, lipase, xylanase, pectinase, Beta
              glucanase, cellulase và lactose.
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              Bổ sung vào thức ăn: Sử dụng định kỳ: 5g/1kg thức ăn, ngày 1 cữ,
              liên tục trong suốt quá trình nuôi. <br />
              Khi tôm tiêu hóa kém: 10g/1kg thức ăn, ngày 2 cữ, liên tục 5 ngày.{" "}
              <br />
              Xử lý nước: 1kg/ 2.000 m3 nước. <br />
              Hòa tan ENVIZYME với lượng nước vừa đủ, trộn đều vào thức ăn, áo
              lại để sau 30 phút mới cho tôm ăn.
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
