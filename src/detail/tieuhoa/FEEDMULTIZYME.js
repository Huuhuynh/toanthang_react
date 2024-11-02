import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/tieuhoa/FEEDMULTIZYME.jpg";

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
        subheading={"Multi-enzymes liquid"}
        heading={
          <>
            FEED MULTIZYME
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
              Bổ sung các enzyme đậm đặc vào thức ăn cho tôm, cá giúp tiêu hóa
              và hấp thu triệt để dưỡng chất có trong thức ăn, giúp tôm cá lớn
              nhanh, đường ruột khỏe mạnh, dùng định kỳ giúp ngăn ngừa các bệnh
              đường ruột như : phân trắng, phân sống, lỏng ruột, ăn không hấp
              thu dẫn đến ô nhiễm ao nuôi. <br />
              Dùng tạt trực tiếp xuống ao nuôi giúp giảm tảo phát triển quá mức,
              nước xanh, xử lý ao nuôi bị tảo tàn, ao ô nhiễm, nước kẹo, bọt khó
              tan, khí độc cao
            </p>
            <p>
              Bảo quản: ở nơi khô ráo, thoáng mát dưới 35°C. Tránh ánh nắng trực
              tiếp.
              <br />
              Cảnh bảo an toàn: Tránh tiếp xúc với da, mắt, miệng.
              <br />
              Sản xuất tại: Công ty AUM ENZYMES; 30 Bhakti Nagar, Nr. Jalaram
              Mandir, At post: BORSAD-388 540. City: Anand city code: 388 001
              State: Gujarat Country: India (Ấn Độ). Tel: +91-9898383455.
              <br />
              Doanh nghiệp nhập khẩu, công bố chất lượng và chịu trách nhiệm đưa
              sản phẩm ra thị trường: Công ty TNHH SAGOPHAR; địa chỉ: 965/22/20
              Quang Trung, Phường 14, Quận Gò Vấp, TP Hồ Chí Minh. <br />
              Nhà phân phối: CÔNG TY TNHH ĐẦU TƯ VÀ THƯƠNG MẠI DỊCH VỤ TOÀN
              THẮNG COMMERCE
              <br />
              Địa chỉ : 49 đường số 6B (nối dài) khu dân cư Vĩnh Lộc, khu phố 4,
              Phường Bình Hưng Hòa B, Quận Bình Tân, TP.Hồ Chí Minh, Việt Nam.
              Điện thoại: 0932 186699 , MSTN: 03-045460
              <br />
              NSX: 06.2023 <br /> HSD: 3 năm kể từ ngày sản xuất <br /> LOT:
              5204FM
              <br />
              Khối lượng tịnh: 1 lít
              <br />
              KHÔNG CHỨA KHÁNG SINH VÀ CHẤT CẤM
              <br />
              CHỈ DÙNG TRONG THỦY SẢN
            </p>
          </Description>
        }
        description2={
          <Description2>
            <strong>THÀNH PHẦN: </strong>
            <p>
              Xylanase……50.000.000 UI <br /> Chất đệm (nước cất ) vừa đủ.......1
              lít.
              <br />
              Cellulase ……25.000.000 UI <br /> Hemicellulase……….20.000.000 UI{" "}
              <br />
              Betaglucanase.……20.000.000 UI <br /> Pectinase.…….5.000.000 UI{" "}
              <br />
              Endoglucanase...……5.000.000 UI <br /> Phytase ..........1.000.000
              UI <br />
              Amylase ...........5.000.000 UI <br /> Protease
              ...........5.000.000 UI
              <br />
              Lipase .............5.000.000 UI , <br /> Alpha
              galactosidase.........5.000.000 UI
              <br />
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              Trộn vào thức ăn: dùng chung được với tất cả các thuốc khác, chịu
              kháng sinh. <br />
              Dùng cho tôm: 2ml – 3ml/1kg thức ăn, ngày 1 lần, liên tục trong
              quá trình nuôi. <br />
              Dùng cho cá : 1 lít/ 2 tấn thức ăn, ngày 1 lần, 1 tuần trộn 3 lần.{" "}
              <br />
              Tạt trực tiếp xuống ao : định kỳ 1 lít/4.000m3 nước, 1 tuần tạt 1
              lần <br />
              Khi ao nuôi ô nhiễm : 1 lít/2.000m3 nước.
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
