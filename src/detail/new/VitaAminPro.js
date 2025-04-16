import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light.js";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/spnew/VITA_AMIN_PRO.png";

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
          "VITAMIN TỔNG HỢP – TĂNG SỨC ĐỀ KHÁNG GIÚP TÔM PHỤC HỒI NHANH SAU KHI BỆNH"
        }
        heading={
          <>
            VITA – AMIN PRO
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
              Bổ sung các vitamin cần thiết vào thức ăn tôm, cá, ếch.
              <br />
              Giúp tôm, cá, ếch tăng trưởng và phát triển tốt.
              <br />
              Nâng cao năng suất và tăng tỉ lệ sống cho tôm, cá, ếch.
            </p>
            <p>
              <strong>Định lượng tịnh:</strong> Gói 1kg <br />
              <strong>Số tiêu chuẩn công bố:</strong> TCCS 01:2025/TT
              <br />
              <strong>Mã số tiếp nhận:</strong> 01-055162 <br />
              Số lô sản xuất: <br />
              Ngày sản xuất: <br />
              Sản phẩm phải được bảo quản ở nơi khô ráo, thoáng mát, tránh ánh
              nắng trực tiếp. Kho phải có biện pháp chống chuột và côn trùng phá
              hoại. Chỉ dùng trong nuôi trồng thủy sản. <br />
              <strong>Hạn sử dụng:</strong> 2 năm kể từ ngày sản xuất trong điều
              kiện bao bì kín. Nếu bao bì đã mở thì sử dụng không quá 7 ngày.
              Chú ý đóng kín bao bì sau khi sử dụng. <br />
              <strong>Sản phẩm của:</strong> CÔNG TY TNHH ĐẦU TƯ VÀ THƯƠNG MẠI
              DỊCH VỤ TOÀN THẮNG COMMERCE <br />
              <strong>Địa chỉ:</strong> 49 Đường số 6B (nối dài), KDC Vĩnh Lộc,
              KP4, P.Bình Hưng Hòa B, Q.Bình Tân, TP.HCM, Việt Nam <br />
              <strong>Sản xuất tại:</strong> CHI NHÁNH SỐ 2 - CÔNG TY TNHH ĐẠI
              AN THÁI – Lô A1.2, Đường số 2, KCN Đức Hòa III-Tập Đoàn Tân Á Đại
              Thành, Ấp Đức Hạnh 2, Xã Đức Lập Hạ, Huyện Đức Hòa, Tỉnh Long An,
              Việt Nam
            </p>
          </Description>
        }
        description2={
          <Description2>
            <strong>THÀNH PHẦN: </strong>
            <p>
              Vitamin A (min) ............................. 350.000 UI/kg
              <br />
              Vitamin E (min) ............................. 240 UI/kg
              <br />
              Vitamin B1 (min) ............................. 30 mg/kg
              <br />
              Vitamin B5 (min) ............................. 300 mg/kg
              <br />
              Vitamin C (Ascorbic acid) (min) ..................... 100mg/kg
              <br />
              Độ ẩm (max) ............................. 10%
              <br />
              Chất mang (dextrose) vừa đủ ..................... 1kg
              <br />
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              Hòa sản phẩm với lượng nước sạch vừa phải, sau đó trộn đều vào
              thức ăn.
              <br />
              <strong>Đối với tôm:</strong> sử dụng 2-3g/kg thức ăn, cho ăn liên
              tục trong quá trình nuôi.
              <br />
              <strong>Đối với cá:</strong> sử dụng 3-5g/kg thức ăn, cho ăn liên
              tục trong quá trình nuôi.
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
