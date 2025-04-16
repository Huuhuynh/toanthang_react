import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light.js";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/spnew/SULBAC_NEW.png";

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
          "THẢO DƯỢC THAY THẾ KHÁNG SINH NGĂN NGỪA BỆNH PHÂN TRẮNG, ĐƯỜNG RUỘT"
        }
        heading={
          <>
   SULBAC NEW
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
            Giảm độ nhớt trong tiêu hóa.   <br />
Tăng cường tiêu hóa và hấp thu các chất dinh dưỡng đặc
biệt là chất đạm.   <br />
Hỗ trợ ngăn ngừa các tác nhân nội sinh gây bệnh về
đường ruột như phân trắng, phân lỏng, đứt đoạn,...
            </p>
            <p>
             <strong>Định lượng tịnh:</strong>  LON 500G             <br />
             <strong>Số tiêu chuẩn công bố:</strong> TCCS 02:2025/TT<br />
              <strong>Mã số tiếp nhận:</strong> 1-055161              <br />
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
            Protease (min) ……………………. 350 U/kg <br />
Amylase (min) ……………………. 550 U/kg <br />
Phytase (min)……………………. 480 U/kg <br />
Độ ẩm (max) …………………….10% <br />
Chất mang (dextrose) vừa đủ 1kg <br />
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
            Dùng 3-5g/kg thức ăn, liên tục trong quá trình nuôi. Cho ăn tất
cả các cữ trong ngày.<br />
Khi tôm, cá kém ăn: tăng liều lượng lên gấp đôi.<br />
<strong>Lưu ý:</strong> Khuấy trộn sản phẩm với lượng nước vừa đủ rồi tưới vào
thức ăn và để thức ăn khô tự nhiên 10 phút trước khi cho tôm, cá
ăn.
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
