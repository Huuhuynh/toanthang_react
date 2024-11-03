import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light.js";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/bg9.png";

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
        // subheading={"ỨC CHẾ EHP PHÁT TRIỂN BÊN TRONG ĐƯỜNG RUỘT TÔM"}
        heading={
          <>
            AQUA BUSAL - B12
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
              Trên tôm: <br />
              Chống rối loạn trao đổi chất, cân bằng pH, điều hòa áp suất thẩm
              thấu, duy trì hoạt động và nuôi dưỡng tế bào. Tăng cường chức năng
              tạo vỏ, ngừa và hỗ trợ điều trị bệnh đục cơ rớt đáy, mền vỏ rớt
              cục thịt, giúp tôm chắc thịt, vỏ cứng bóng, nặng cân. Tăng sức đề
              kháng, chống stress, kháng bệnh, tăng khả năng bắt mồi, giải độc
              gan. Kích thích biến dưỡng, thúc đẩy quá trình trao đổi chất, tăng
              chuyển hóa và hấp thu thức ăn, kích thích tăng trọng, giảm hệ số
              FCR. <br />
              Trên cá, lươn, ếch: <br />
              Giúp cá, lươn, ếch ăn mạnh, kích thích tăng trọng, chống stress,
              phục hồi nhanh sau bệnh, tái tạo hồng cầu, tạo máu, hỗ trợ điều
              trị bệnh trắng gan, trắng mang, bệnh xuất huyết, hoại tử, bệnh đốm
              đỏ ở cơ.
            </p>
            <p>
              CHỐNG CHỈ ĐỊNH: <br />
              Không sử dụng chung với thuốc có cùng hoạt chất chính. <br />
              Không dùng quá liều chỉ định. <br />
              THỜI GIAN NGƯNG SỬ DỤNG THUỐC: Không <br />
              ĐIỀU KIỆN BẢO QUẢN: Nơi thoáng mát, nhiệt độ không quá 30ºC.{" "}
              <br />
              CHỈ DÙNG TRONG THỦY SẢN
            </p>
          </Description>
        }
        description2={
          <Description2>
            <strong>THÀNH PHẦN: </strong>
            <p>
              [1-(Butylamino)-1-methylethyl]-phosphonic acid........... 120g{" "}
              <br />
              Cyanocobalamine............................................
              .......50mg <br />
              Dung môi vừa đủ................................................ 1
              Lít
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              AQUA BUSAL – B12 ứng dụng công nghệ đột phá sử dụng giải pháp đẳng
              trương, giúp cân bằng pH, điều hòa áp suất thẩm thấu, duy trì hoạt
              động nuôi dưỡng tế bào. <br />
              Hòa vào nước trộn vào thức ăn. <br />
              Trên cá: <br />
              Định kỳ: 1lit/40 tấn cá, liên tục 2 ngày, 1 tháng dùng 2 lần.{" "}
              <br />
              Hỗ trợ trị bệnh: 1lit/20 tấn cá, liên tục từ 3 – 5 ngày. <br />
              Trên tôm: <br />
              Định kỳ: 5ml/1kg thức ăn, ngày 1 cữ, liên tục từ 2 – 3 ngày/1
              tháng dùng 2 – 3 đợt. <br />
              Khi tôm ăn yếu hoặc hỗ trợ trị bệnh: 10ml/1kg thức ăn, ngày 2 cữ,
              liên tục từ 3 – 5 ngày. <br />
              Hòa tan AQUA BUSAL – B12 với lượng nước vừa đủ, trộn đều vào thức
              ăn, sau 30 phút mới cho ăn.
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
