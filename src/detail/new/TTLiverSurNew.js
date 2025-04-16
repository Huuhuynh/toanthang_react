import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light.js";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/spnew/TT_LIVER_SUR.png";

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
          "CÁC LOẠI THẢO DƯỢC ĐẶC BIỆT HỖ TRỢ ĐIỀU TRỊ VÀ NGĂN NGỪA CÁC BỆNH VỀ GAN, VÀNG GAN, SƯNG GAN, TEO GAN, HOẠI TỬ GAN TỤY CẤP"
        }
        heading={
          <>
            TT – LIVER SUR
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
              Hỗ trợ quá trình điều trị và ngăn ngừa tác nhân gây các bệnh về
              gan: vàng gan, sưng gan, teo gan, hoại tử gan-tụy ở tôm.
              <br />
              Hỗ trợ tăng cường chức năng giải độc của gan do hóa chất, sử dụng
              kháng sinh lâu ngày và các loại độc tố khác.
              <br />
              Giúp tái tạo tế bào gan, tăng cường chức năng gan.
              <br />
              Giúp gan chuyển hóa dinh dưỡng tôt, phục hồi nhanh sau bệnh.
              <br />
            </p>
            <p>
              <strong>Định lượng tịnh:</strong> CAN 5 LÍT <br />
              <strong>Số tiêu chuẩn công bố:</strong> TCCS 03:2025/TT <br />
              <strong>Mã số tiếp nhận:</strong>
              <br />
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
              Sorbitol (min) ……………………. 15%
              <br />
              Dung môi (nước sạch) vừa đủ 1 lít
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              <strong>Tạt ao nuôi:</strong> <br />
              Ngăn ngừa tác nhân môi trường gây các bệnh về gan: tạt 1
              lít/1.000m3 nước.
              <br />
              Khi tôm yếu, xuất hiện tác nhân môi trường gây các bệnh về gan:
              tạt 2 lít/1.000m3 nước.
              <br />
              Tạo môi trường thuận lợi cho sự phát triển tế bào gan và giải độc
              gan: tạt 1 lít/1.500m3 nước.
              <br />
              <strong>Trộn thức ăn:</strong> <br />
              Trộn 5ml/kg thức ăn, cho ăn liên tục trong quá trình nuôi.
              <br />
              Khi có dấu hiệu bệnh gan: trộn 10ml/kg thức ăn.
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
