import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/spnew/super_kill.jpg";

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
          "XỬ LÝ NẤM ĐỒNG TIỀN, NHỚT BẠT"
        }
        heading={
          <>
            SUPER KILL
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
              Đối với cá:
              <br />
              Diệt ngoại kí sinh trên cá có trong môi trường nước ao nuôi như:
              nấm nhớt, rận cá, trùng mỏ neo, trùng bánh xe,...
              <br />
              Diệt khuẩn trong nước ao nuôi gây bệnh lở loét, thối đuôi, thối
              vây, gan thận mủ.
              <br />
              Đối với tôm:
              <br />
              Xử lý nấm đồng tiền bám trên bạt và các thiết bị trong ao nuôi.
              <br />
              Xử lý đóng rong, diệt sạch các loại ký sinh trùng trong ao nuôi.
              <br />
              Diệt sạch vi rút, vi khuẩn trong nước ao nuôi gây bệnh đỏ thân,
              đốm đen, gan, tụy, đường ruột trên tôm.
              <br />
            </p>
            <p>
              Định lượng tịnh:
              <br />
              Số tiêu chuẩn công bố:
              <br />
              TCCS 01:2024/TT
              <br />
              Mã số tiếp nhận: <br />
              Số lô sản xuất: <br />
              Ngày sản xuất:
              <br />
              Bảo quản nơi khô ráo, thoáng mát. Tránh ánh nắng trực tiếp. Tránh
              xa tầm tay trẻ em. Tránh rây vào mắt, da, niêm mạc. Nếu vào mắt,
              da, niêm mạc dùng nước sạch rửa sạch. Không dùng cho người, chỉ
              dùng trong nuôi trồng thủy sản.
              <br />
              Hạn sử dụng: 2 năm kể từ ngày sản xuất trong điều kiện bao bì kín.
              Nếu bao bì đã mở thì sử dụng không quá 7 ngày. Chú ý đóng kín bao
              bì sau khi sử dụng.
              <br />
              Sản phẩm của: CÔNG TY TNHH ĐẦU TƯ VÀ THƯƠNG MẠI DỊCH VỤ TOÀN THẮNG
              COMMERCE
              <br />
              Địa chỉ: 49 Đường số 6B (nối dài), KDC Vĩnh Lộc, KP4, P.Bình Hưng
              Hòa B, Q.Bình Tân, TP.HCM, Việt Nam
              <br />
              Sản xuất tại: CHI NHÁNH SỐ 2 - CÔNG TY TNHH ĐẠI AN THÁI – Lô A1.2,
              Đường số 2, KCN Đức Hòa III-Tập Đoàn Tân Á Đại Thành, Ấp Đức Hạnh
              2, Xã Đức Lập Hạ, Huyện Đức Hòa, Tỉnh Long An, Việt Nam
            </p>
          </Description>
        }
        description2={
          <Description2>
            <strong>THÀNH PHẦN: </strong>
            <p>
              Glutaraldehyde (1,5-Pentanedial) (min) 15% <br />
              Dung môi (nước sạch) vừa đủ 1 lít
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              Đối với cá: <br />
              Đối với cá 15-30 ngày tuổi: Sử dụng 1 lít SUPER KILL cho
              10.000-12.000m3 nước. <br />
              Đối với cá trên 30 ngày tuổi: Sử dụng 1 lít SUPER KILL cho
              8.000-10.000m3 nước. <br />
              Đối với cá trên 50 ngày tuổi: Sử dụng 1 lít SUPER KILL cho
              5.000-8.000m3 nước. <br />
              Đối với tôm: <br />
              Xử lý nấm đồng tiền: 1 lít/2.000-3.000m3 nước. <br />
              Diệt ký sinh trùng, đóng rong và xử lý nước khi tôm xuất hiện
              bệnh: 4.000-5.000m3 nước. <br />
              Diệt khuẩn trước khi thả tôm: 1 lít/6.000-7.000m3 nước. <br />
              Diệt khuẩn và ngăn ngừa bệnh trong quá trình nuôi: 1 lít/10.000m3
              nước. <br />
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
