import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/spnew/canxu_new.jpg";

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
        subheading={"KÍCH THÍCH LỘT VỎ, NHANH CỨNG VỎ, NGĂN NGỪA HIỆN TƯỢNG CÔNG THÂN, ĐỤC CƠ, ỐP VỎ DO THIẾU KHOÁNG"}
        heading={
          <>
            CANXI NEW
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
              Bổ sung các chất khoáng cần thiết giúp tôm, cá phát triển tốt.{" "}
              <br />
              Giúp tôm giảm các hiện tượng do thiếu khoáng như: còi cọc, đục cơ,
              cong thân. Đặc biệt trong giai đoạn lột xác giúp tôm lột xác nhanh
              và hình thành bộ vỏ tốt sau quá trình lột xác. <br />
              Giúp cá hình thành cấu trúc xương, giảm hiện tượng dị dạng xương,
              mòn vây và da.
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
              Sản phẩm phải được bảo quản ở nơi khô ráo, thoáng mát, tránh ánh
              nắng trực tiếp. Kho phải có biện pháp chống chuột và côn trùng phá
              hoại. Chỉ dùng trong nuôi trồng thủy sản.
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
              Co (dạng CoSO4) (min) 5 mg/lít <br />
              Mn (dạng MnSO4) (min) 450 mg/lít <br />
              Mg (dạng MgCO3) (min) 900 mg/lít <br />
              Na (dạng NaHCO3) (min) 30.000 mg/lít <br />
              Zn (dạng ZnSO4) (min) 1.000 mg/lít <br />
              Ca (dạng CaHPO4) (min) 5.000 mg/lít <br />
              P (dạngCa(H2PO4)2.H2O) (min) 2.000 mg/lít <br />
              Dung môi (nước sạch) vừa đủ 1 lít
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              Dùng 3-5ml/kg thức ăn, liên tục trong quá trình nuôi. Cho ăn tất
              cả các cữ trong ngày.
              <br />
              Khi tôm bị cong thân, đục cơ: 10ml/kg thức ăn.
              <br />
              Tôm giai đoạn lột xác: 15ml/kg thức ăn.
              <br />
              Khi cá đang trong giai đoạn hình thành bộ xương: 7ml/kg thức ăn.
              <br />
              Có thể tạt trực tiếp xuống ao với liều lượng:
              1lít/1.500-2.000m3 nước, định kỳ 5-7 ngày/lần.
              <br />
              Lưu ý: Khuấy trộn dung dịch  thường xuyên khi tưới vào thức ăn để
              sản phẩm được phân tán đều. Để thức ăn khô tự  nhiên 30 phút trước
              khi cho tôm, cá ăn.
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
