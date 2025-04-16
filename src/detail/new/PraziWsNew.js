import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light.js";
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
        subheading={"MEN VI SINH ỨC CHẾ EHP – NGỪA PHÂN TRẮNG"}
        heading={
          <>
            PRAZI WS NEW
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
              Sản phẩm vi sinh đường ruột kết hợp ức chế bệnh EHP là giải pháp
              toàn diện để bảo vệ sức khỏe đường ruột, ngừa tác nhân nội sinh
              đường ruột gây bệnh phân trắng trên tôm.
              <br />
              <strong>Cải thiện hệ tiêu hóa</strong>:<br />
              Giúp cân bằng hệ vi sinh đường ruột, hỗ trợ tiêu hóa tốt hơn.
              <br />
              Tăng cường khả năng hấp thụ dinh dưỡng từ thức ăn.
              <br />
              Giảm thiểu các vấn đề tiêu hóa như tiêu chảy, khó tiêu.
              <br />
              <strong>Tăng cường hệ miễn dịch:</strong>
              <br />
              Kích thích hệ thống miễn dịch tự nhiên, giúp cơ thể đề kháng tốt
              hơn với các mầm bệnh.
              <br />
              Bảo vệ đường ruột khỏi sự xâm nhập của vi khuẩn và vi rút có hại.
              <br />
              <strong>Ức chế bệnh EHP:</strong>
              <br />
              Hỗ trợ ngăn chặn sự phát triển của vi rút EHP (Enterocytozoon
              hepatopenaei) gây bệnh trong hệ tiêu hóa.
              <br />
              Giảm nguy cơ mắc bệnh tôm chết sớm, bảo vệ sức khỏe vật nuôi.
            </p>
            <p>
              <strong>Định lượng tịnh:</strong> GÓI 100G <br />
              <strong>Số tiêu chuẩn công bố:</strong> TCCS 03:2025/TT
              <br />
              <strong>Mã số tiếp nhận:</strong> 03-055158 <br />
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
              Bacillus subtilis (min) ……………………109 CFU/kg
              <br />
              Độ ẩm (max) ……………………10%
              <br />
              Chất mang (dextrose) vừa đủ 1kg
              <br />
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              Ức chế EHP và ngăn chặn phân trắng: dùng 5-7g/kg thức ăn, cho ăn
              liên tục 5-7 ngày.
              <br />
              Ngừa EHP và phân trắng: dùng 3-5g/kg thức ăn, cho ăn liên tục
              trong suốt quá trình nuôi.
              <br />
              Trong trường hợp sử dụng PRAZI WS NEW để ức chế bệnh phân trắng,
              cần sử dụng 200g PRAZI WS NEW tạt cho 1.000 – 1.500 m3 nước để ức
              chế vi khuẩn gây bệnh phân trắng, kết hợp sử dụng men vi sinh xử
              lý môi trường để làm sạch môi trường ao nuôi.
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
