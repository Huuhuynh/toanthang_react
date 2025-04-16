import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/spnew/bio_plus.png";

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
          "XỬ LÝ KHÍ ĐỘC H2S, NO2, NH3, LÀM SẠCH NHỚT BẠT TRONG AO NUÔI"
        }
        heading={
          <>
            BIO - PLUS
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
              Phân hủy thức ăn dư thừa, mùn bã hữu cơ, chất thải của tôm cá.{" "}
              <br />
              Phân giải các khí độc như: NH3, H2S, NO2,… trong ao nuôi tôm cá.{" "}
              <br />
              Làm sạch nước, sạch nhớt bạt trong ao nuôi.
            </p>
            <p>
             <strong>Định lượng tịnh:</strong>  Gói 227g<br />
             <strong>Số tiêu chuẩn công bố:</strong> TCCS 03:2024/TT<br />
              TCCS 03:2024/TT <br />
              <strong>Mã số tiếp nhận:</strong> 02-053417<br />
              Số lô sản xuất: <br />
              Ngày sản xuất: <br />
              Sản phẩm phải được bảo quản ở nơi khô ráo, thoáng mát, tránh ánh
              nắng trực tiếp. Kho phải có biện pháp chống chuột và côn trùng phá
              hoại. Chỉ dùng trong nuôi trồng thủy sản. <br />
              Hạn sử dụng: 2 năm kể từ ngày sản xuất trong điều kiện bao bì kín.
              Nếu bao bì đã mở thì sử dụng không quá 7 ngày. Chú ý đóng kín bao
              bì sau khi sử dụng. <br />
              Sản phẩm của: CÔNG TY TNHH ĐẦU TƯ VÀ THƯƠNG MẠI DỊCH VỤ TOÀN THẮNG
              COMMERCE <br />
              Địa chỉ: 49 Đường số 6B (nối dài), KDC Vĩnh Lộc, KP4, P.Bình Hưng
              Hòa B, Q.Bình Tân, TP.HCM, Việt Nam <br />
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
              Bacillus spp. (Bacillus subtilis, Bacillus licheniformis, Bacillus
              pumilus) (min) 3 x 109 CFU/kg <br />
              Độ ẩm (max) 10% <br />
              Chất mang (đường maltose) vừa đủ 1kg <br />
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              Dùng xử lý nước: hòa sản phẩm với nước sạch rồi tạt đều mặt ao
              đồng thời chạy quạt khí. <br />
              Tôm dưới 1 tháng tuổi: sử dụng 20 - 30g/1.000m3 nước, định kỳ 5-7
              ngày/lần. <br />
              Tôm 1-2 tháng tuổi: sử dụng 30 - 50g/1.000m3 nước, định kỳ 5-7
              ngày/lần. <br />
              Tôm trên 2 tháng tuổi: sử dụng 50 - 100g/1.000m3 nước, định kỳ 5-7
              ngày/lần. <br />
              Sử dụng tốt nhất vào buổi sáng sớm hoặc chiều mát. <br />
              Pha mật rỉ: Pha 100 gram chế phẩm với 2 kg rỉ đường (hoặc 1 kg
              đường vàng) trong 20 lít nước sạch sục khí 3-5 giờ, có thể pha
              thêm 10 kg mật rỉ (5 kg đường cát), khuấy đều trước khi tạt theo
              liều dùng. <br />
              Sử dụng trực tiếp: 100 gram chế phẩm + 10 kg mật rỉ (5 kg đường
              cát) + 10 lít nước ao, khuấy đều, tạt theo liều dùng. <br />
              Sử dụng định kỳ 5-7 ngày/lần tùy theo lượng NH3, NO2 trong ao. Có
              thể dùng 1 tuần 1 lần tùy theo lượng NO2. <br />
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
