import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import Footer from "../../components/footers/FiveColumnWithInputForm.js";
import Header from "../../components/headers/light";
import MainFeature from "../../components/features/TwoColWithButton.js";

import InstructionImage_1 from "../../images/product/dinhduong/tangtrong.png";

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block text-base`;
  const Description = tw.span`inline-block mt-8`;
  const Description2 = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  var token = localStorage.getItem("token");

  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature
        subheading={
          "BỔ SUNG VITAMIN, ACID AMIN ĐẬM ĐẶC GIÚP TÔM LỚN NHANH, LỘT XÁC ĐỒNG ĐỀU"
        }
        heading={
          <>
            TĂNG TRỌNG
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
              Cung cấp Vitamin và Acid amin đậm đặc giúp tôm cân bằng dinh
              dưỡng, tăng cường khả năng hấp thu và chuyển hóa dinh dưỡng có
              trong thức ăn, tăng cường sức đề kháng, kích thích quá trình lột
              vỏ đồng đều và nhanh cứng vỏ, giúp tôm tăng trưởng và phát triển
              tốt, tăng trọng nhanh, đồng đều, nặng cân, giảm hệ số (FCR).{" "}
              <br />
              Giải pháp mới an toàn cho sức khỏe đường ruột tôm ở mọi lứa tuổi.
            </p>
            <p>
              HƯỚNG DẪN BẢO QUẢN: Bảo quản nơi khô ráo và thoáng mát. <br />
              THỜI GIAN NGƯNG SỬ DỤNG TRƯỚC KHI THU HOẠCH: Không <br />
              Cảnh báo: Tránh xa tầm tay trẻ em. <br />
              Thể tích thực: 500ml <br />
              Hạn dùng: 2 năm kể từ ngày sản xuất <br />
              CHỈ DÙNG TRONG NUÔI TRỒNG THỦY SẢN <br />
              Sản phẩm không chứa các chất cấm sử dụng trong sản xuất, kinh
              doanh thủy sản theo các quy định hiện hành của Bộ NN&PTNT
            </p>
          </Description>
        }
        description2={
          <Description2>
            <strong>THÀNH PHẦN: </strong>
            <p>
              Vitamin A (min)....... 8.000.000 UI/lít <br /> Vitamin B2
              (min)........ 1.000 mg/lít <br />
              Vitamin D3 (min)........ .2.000.000 UI/lít <br /> Vitamin B­6
              (min)...... 1.400 mg/lít <br />
              Vitamin E (min)............. 1.000 mg/lít <br /> Vitamin B12
              (min).......... 20 mg/lít <br />
              Vitamin B1 (min)......... 2.000 mg/lít <br /> Dung môi (nước cất)
              vừa đủ....... 1 lít <br />
              THÀNH PHẦN NGUYÊN LIỆU: <br />
              Vitamin A, vitamin D3, vitamin E, vitamin B1, vitamin B2, vitamin
              B6, vitamin B12 và nước cất.
            </p>
            <strong>HƯỚNG DẪN SỬ DỤNG:</strong>
            <p>
              Sử dụng định kỳ: 2ml/1kg thức ăn, ngày 1 cữ, liên tục trong quá
              trình nuôi. <br />
              Giúp tăng trọng nhanh: 4ml/1kg thức ăn, ngày 1 cữ, liên tục 30
              ngày trước khi xuất bán. <br />
              Hòa tan TĂNG TRỌNG với lượng vừa đủ, trộn đều vào thức ăn, áo lại
              để sau 30 phút mới cho tôm ăn. <br />
              Kết hợp dùng chung với sản phẩm SUPER CANXI để tăng hiệu quả sử
              dụng. <br />
              Lắc đều trước khi sử dụng.
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
