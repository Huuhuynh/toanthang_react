import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light";
import MainFeature from "../../components/features/TwoColWithButton.js";

// import InstructionImage_1 from "";

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
        subheading={""}
        heading={
          <>
            DIỆT ỐC
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
              Diệt ốc đinh, các loại ốc khác và động vật thân mềm như sò, vẹm,
              chem chép trong ao nuôi trồng thủy sản.
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
              Niclosamide olamine (2'5-dichloro-4'-nitrosalicylanilide) (min)
              400.000 mg/kg <br />
              Độ ẩm (max) 10% <br />
              Chất mang (zeolite) vừa đủ 1kg
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              Sử dụng trong quá trình cải tạo ao: <br />
              Đối với ao cải tạo có mực nước cạn khoảng 5-10cm: Dùng
              0,5-1kg/1.000m2. <br />
              Đối với ao cải tạo có mực nước cạn khoảng 1m: Dùng
              1-1,5kg/1.000m2. <br />
              Nếu độ mặn cao thì điều chỉnh tăng liều. <br />
              Cách sử dụng: <br />
              Dùng vào lúc 17-18 giờ, hòa 1 kg DIỆT ỐC cho 50 lít nước, đứng
              trước gió tạt đều ngay xuống ao, nên bật quạt khi sử dụng. <br />
              Nên ngâm giữ nước sau khi dùng 1-3 ngày để diệt hết ốc còn sót
              lại. <br />
              Sau 7-10 ngày dùng sản phẩm là có thể thả giống.
            </p>
          </Description2>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Liên hệ"
        imageSrc={''}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
