import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "../misc/Layouts.js";
import { SectionHeading } from "../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";
import { ReactComponent as StarIcon } from "../../images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-7.svg";
import InstructionImage_1 from "../../images/product/bg1.png";
import InstructionImage_2 from "../../images/product/bg2.jpg";
import InstructionImage_3 from "../../images/product/bg3.png";
import InstructionImage_4 from "../../images/product/bg4.png";
import InstructionImage_5 from "../../images/product/bg5.png";
import InstructionImage_6 from "../../images/product/bg6.png";
import InstructionImage_7 from "../../images/product/bg7.png";
import InstructionImage_8 from "../../images/product/bg9.png";
import InstructionImage_9 from "../../images/product/bg10.png";
import InstructionImage_10 from "../../images/product/bg11.png";
import InstructionImage_11 from "../../images/product/bg12.png";
import InstructionImage_12 from "../../images/product/bg15.jpg";
import InstructionImage_13 from "../../images/product/bg16.png";
import InstructionImage_14 from "../../images/product/bg17.png";
import InstructionImage_15 from "../../images/product/bg18.png";
import InstructionImage_16 from "../../images/product/bg21.jpg";
import florsol from "../../images/product/dactribenh/florsol.png";
import ANTIPARA from "../../images/product/dactribenh/ANTIPARA.png";
import canxi_one from "../../images/product/dinhduong/canxione.png";
import CHELATE from "../../images/product/dinhduong/CHELATE.png";
import PROTAMIN from "../../images/product/dinhduong/PROTAMIN.png";
import NUTRIGANO from "../../images/product/dinhduong/NUTRIGANO.jpeg";
import SUPER_CANXI from "../../images/product/dinhduong/SUPER_CANXI.png";
import tangtrong from "../../images/product/dinhduong/tangtrong.png";
import VITAAMIN from "../../images/product/dinhduong/VITAAMIN.png";
import C14 from "../../images/product/tieuhoa/C14.png";
import ENVIZYME from "../../images/product/tieuhoa/ENVIZYME.png";
import FEEDMULTIZYME from "../../images/product/tieuhoa/FEEDMULTIZYME.jpg";
import PRAZIWS from "../../images/product/moitruong/PRAZIWS.png";
import bio_plus from "../../images/product/spnew/bio_plus.jpg";
import canxu_new from "../../images/product/spnew/canxu_new.jpg";
import super_kill from "../../images/product/spnew/super_kill.jpg";
import totazyme from "../../images/product/spnew/totazyme.jpg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-2 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;
export default ({
  heading = "Checkout the Menu",
  tabsTitleName = [
    "Đặc trị bệnh",
    "DINH DƯỠNG - VI KHOÁNG - GIẢI ĐỘC GAN - ACID HỮU CƠ",
  ],
  tabs = {
    new: [
      {
        imageSrc: InstructionImage_2,
        title: "TT- HEPA FIX",
        content: "200g, 500g, 1kg/lon",
        price: "310,000 VNĐ",
        rating: "4.8",
        reviews: "312",
        url: "/TTHepaFix",
      },
      {
        imageSrc: InstructionImage_5,
        title: "TT- LIVER BOOST",
        content: "200g, 500g, 1kg/lon",
        price: "395,000 VNĐ",
        rating: "4.2",
        reviews: "192",
        url: "/TTLiverBoost",
      },
      {
        imageSrc: InstructionImage_7,
        title: "TT - LIVER SUR",
        content: "1 lít/chai",
        price: "350,000 VNĐ",
        rating: "4.2",
        reviews: "953",
        url: "/TTLiverSur",
      },
      {
        imageSrc: InstructionImage_9,
        title: "ĐẶC TRỊ ĐỤC CƠ",
        content: "1kg/ lon",
        price: "945,000 VNĐ",
        rating: "4.9",
        reviews: "210",
        url: "/FOSFOTLS",
      },
      {
        imageSrc: InstructionImage_10,
        title: "SULBAC",
        content: "200g, 500g, 1kg/lon",
        price: "365,000 VNĐ",
        rating: "4.9",
        reviews: "634",
        url: "/SulBSC",
      },
      {
        imageSrc: InstructionImage_13,
        title: "LIVER TONIC",
        content: "200g, 500g, 1kg/lon",
        price: "365,000 VNĐ",
        rating: "4.6",
        reviews: "162",
        url: "/LiverTonic",
      },
      {
        imageSrc: florsol,
        title: "FLOR SOL",
        content: "500ml/lon",
        price: "365,000 VNĐ",
        rating: "4.7",
        reviews: "573",
        url: "/florsol",
      },
      {
        imageSrc: ANTIPARA,
        title: "PL – ANTIPARA",
        content: "500g/lon",
        price: "365,000 VNĐ",
        rating: "4.5",
        reviews: "132",
        url: "/ANTIPARA",
      },
      {
        imageSrc: InstructionImage_1,
        title: "Chống Stress",
        content: "1 lít/chai - 20 chai/ thùng",
        price: "Giá: Liên hệ",
        rating: "5.0",
        reviews: "187",
        url: "/chongstress",
      },
      {
        imageSrc: InstructionImage_14,
        title: "NUTRI - PRO",
        content: "500g, 1kg/lon",
        price: "Giá: Liên hệ",
        rating: "4.7",
        reviews: "159",
        url: "/nutripro",
      },
      {
        imageSrc: InstructionImage_8,
        title: "AQUA BUSAL - B12",
        content: "500ml, 1lit/chai",
        price: "290,000 VNĐ",
        rating: "3.9",
        reviews: "126",
        url: "/AQUABUSAL",
      },
      {
        imageSrc: InstructionImage_4,
        title: "TT - PATHO STOP",
        content: "500ml, 1lit/chai",
        price: "355,000 VNĐ",
        rating: "4.6",
        reviews: "129",
        url: "/ttpathostop",
      },
      {
        imageSrc: InstructionImage_6,
        title: "INOBITOL",
        content: "500g, 1kg/lon",
        price: "340,000 VNĐ",
        rating: "5.0",
        reviews: "611",
        url: "/inobitol",
      },
      {
        imageSrc: canxi_one,
        title: "CANXI ONE ",
        content: "1 lít/chai",
        price: "340,000 VNĐ",
        rating: "4.0",
        reviews: "611",
        url: "/canxione",
      },
      {
        imageSrc: CHELATE,
        title: "CHELATE",
        content: "1kg/lon",
        price: "340,000 VNĐ",
        rating: "4.8",
        reviews: "161",
        url: "/CHELATE",
      },
      {
        imageSrc: PROTAMIN,
        title: "PROTAMIN",
        content: "500g/lon",
        price: "340,000 VNĐ",
        rating: "5.0",
        reviews: "478",
        url: "/PROTAMIN",
      },
      {
        imageSrc: NUTRIGANO,
        title: "NUTRIGANO",
        content: "1 lít/chai",
        price: "340,000 VNĐ",
        rating: "4.4",
        reviews: "161",
        url: "/NUTRIGANO",
      },
      {
        imageSrc: SUPER_CANXI,
        title: "SUPER CANXI ",
        content: "1 lít/chai",
        price: "340,000 VNĐ",
        rating: "5.0",
        reviews: "521",
        url: "/SUPER_CANXI ",
      },
      {
        imageSrc: tangtrong,
        title: "TĂNG TRỌNG ",
        content: "500ml/chai",
        price: "340,000 VNĐ",
        rating: "4.0",
        reviews: "361",
        url: "/tangtrong ",
      },
      {
        imageSrc: VITAAMIN,
        title: "VITA – AMIN ",
        content: "500g, 1kg/lon",
        price: "340,000 VNĐ",
        rating: "5.0",
        reviews: "793",
        url: "/VITAAMIN ",
      },
      {
        imageSrc: InstructionImage_15,
        title: "AQUA CRUB",
        content: "200g, 500g, 1kg/chai",
        price: "280,000 VNĐ",
        rating: "4.6",
        reviews: "136",
        url: "/AquaCrub",
      },
      {
        imageSrc: C14,
        title: "C 14",
        content: "500g/chai",
        price: "280,000 VNĐ",
        rating: "4.9",
        reviews: "304",
        url: "/C14",
      },
      {
        imageSrc: ENVIZYME,
        title: "ENVIZYME",
        content: "500g/chai",
        price: "280,000 VNĐ",
        rating: "4.3",
        reviews: "745",
        url: "/ENVIZYME",
      },
      {
        imageSrc: FEEDMULTIZYME,
        title: "FEED MULTIZYME",
        content: "1 lít/lon",
        price: "280,000 VNĐ",
        rating: "4.6",
        reviews: "485",
        url: "/FEEDMULTIZYME",
      },
      {
        imageSrc: InstructionImage_3,
        title: "TTZ",
        content: "350g/gói",
        price: "300,000 VNĐ",
        rating: "4.9",
        reviews: "189",
        url: "/TTZ",
      },
      {
        imageSrc: InstructionImage_11,
        title: "ALL CIDE",
        content: "1lit/chai",
        price: "120,000 VNĐ",
        rating: "4.9",
        reviews: "135",
        url: "/AllCide",
      },
      {
        imageSrc: InstructionImage_12,
        title: "TOXIN SSE",
        content: "2 lít/can",
        price: "365,000 VNĐ",
        rating: "5.0",
        reviews: "256",
        url: "/ToxinSSe",
      },
      {
        imageSrc: InstructionImage_16,
        title: "TT - AQUA +",
        content: "250g/gói",
        price: "200,000 VNĐ",
        rating: "4.8",
        reviews: "118",
        url: "/TTAqua",
      },
      {
        imageSrc: PRAZIWS,
        title: "PRAZI WS",
        content: "1kg/chai",
        price: "200,000 VNĐ",
        rating: "4.6",
        reviews: "338",
        url: "/PRAZIWS",
      },
      {
        imageSrc: bio_plus,
        title: "BIO - PLUS",
        content: "1kg/sản phẩm",
        price: "200,000 VNĐ",
        rating: "4.6",
        reviews: "338",
        url: "/BioPlus",
      },
      {
        imageSrc: super_kill,
        title: "SUPER KILL",
        content: "1lít/sản phẩm",
        price: "200,000 VNĐ",
        rating: "4.6",
        reviews: "338",
        url: "/SuperKill",
      },
      {
        imageSrc: '',
        title: "DIỆT ỐC",
        content: "1kg/sản phẩm",
        price: "200,000 VNĐ",
        rating: "4.6",
        reviews: "338",
        url: "/DietOc",
      },
      {
        imageSrc: canxu_new,
        title: "CANXI NEW",
        content: "1lít/sản phẩm",
        price: "200,000 VNĐ",
        rating: "4.6",
        reviews: "338",
        url: "/CanxiNew",
      },
      {
        imageSrc: totazyme,
        title: "TOTAZYME",
        content: "1kg/sản phẩm",
        price: "200,000 VNĐ",
        rating: "4.6",
        reviews: "338",
        url: "/Totazyme",
      },
    ],
    ĐẶC_TRỊ_BỆNH: [
      {
        imageSrc: InstructionImage_2,
        title: "TT- HEPA FIX",
        content: "200g, 500g, 1kg/lon",
        price: "310,000 VNĐ",
        rating: "4.8",
        reviews: "312",
        url: "/TTHepaFix",
      },
      {
        imageSrc: InstructionImage_5,
        title: "TT- LIVER BOOST",
        content: "200g, 500g, 1kg/lon",
        price: "395,000 VNĐ",
        rating: "4.2",
        reviews: "192",
        url: "/TTLiverBoost",
      },
      {
        imageSrc: InstructionImage_7,
        title: "TT - LIVER SUR",
        content: "1 lít/chai",
        price: "350,000 VNĐ",
        rating: "4.2",
        reviews: "953",
        url: "/TTLiverSur",
      },
      {
        imageSrc: InstructionImage_9,
        title: "ĐẶC TRỊ ĐỤC CƠ",
        content: "1kg/ lon",
        price: "945,000 VNĐ",
        rating: "4.9",
        reviews: "210",
        url: "/FOSFOTLS",
      },
      {
        imageSrc: InstructionImage_10,
        title: "SULBAC",
        content: "200g, 500g, 1kg/lon",
        price: "365,000 VNĐ",
        rating: "4.9",
        reviews: "634",
        url: "/SulBSC",
      },
      {
        imageSrc: InstructionImage_13,
        title: "LIVER TONIC",
        content: "200g, 500g, 1kg/lon",
        price: "365,000 VNĐ",
        rating: "4.6",
        reviews: "162",
        url: "/LiverTonic",
      },
      {
        imageSrc: florsol,
        title: "FLOR SOL",
        content: "500ml/lon",
        price: "365,000 VNĐ",
        rating: "4.7",
        reviews: "573",
        url: "/florsol",
      },
      {
        imageSrc: ANTIPARA,
        title: "PL – ANTIPARA",
        content: "500g/lon",
        price: "365,000 VNĐ",
        rating: "4.5",
        reviews: "132",
        url: "/ANTIPARA",
      },
    ],
    DINH_DƯỠNG: [
      {
        imageSrc: InstructionImage_1,
        title: "Chống Stress",
        content: "1 lít/chai - 20 chai/ thùng",
        price: "Giá: Liên hệ",
        rating: "5.0",
        reviews: "187",
        url: "/chongstress",
      },
      {
        imageSrc: InstructionImage_14,
        title: "NUTRI - PRO",
        content: "500g, 1kg/lon",
        price: "Giá: Liên hệ",
        rating: "4.7",
        reviews: "159",
        url: "/nutripro",
      },
      {
        imageSrc: InstructionImage_8,
        title: "AQUA BUSAL - B12",
        content: "500ml, 1lit/chai",
        price: "290,000 VNĐ",
        rating: "3.9",
        reviews: "126",
        url: "/AQUABUSAL",
      },
      {
        imageSrc: InstructionImage_4,
        title: "TT - PATHO STOP",
        content: "500ml, 1lit/chai",
        price: "355,000 VNĐ",
        rating: "4.6",
        reviews: "129",
        url: "/ttpathostop",
      },
      {
        imageSrc: InstructionImage_6,
        title: "INOBITOL",
        content: "500g, 1kg/lon",
        price: "340,000 VNĐ",
        rating: "5.0",
        reviews: "611",
        url: "/inobitol",
      },
      {
        imageSrc: canxi_one,
        title: "CANXI ONE ",
        content: "1 lít/chai",
        price: "340,000 VNĐ",
        rating: "4.0",
        reviews: "611",
        url: "/canxione",
      },
      {
        imageSrc: CHELATE,
        title: "CHELATE",
        content: "1kg/lon",
        price: "340,000 VNĐ",
        rating: "4.8",
        reviews: "161",
        url: "/CHELATE",
      },
      {
        imageSrc: PROTAMIN,
        title: "PROTAMIN",
        content: "500g/lon",
        price: "340,000 VNĐ",
        rating: "5.0",
        reviews: "478",
        url: "/PROTAMIN",
      },
      {
        imageSrc: NUTRIGANO,
        title: "NUTRIGANO",
        content: "1 lít/chai",
        price: "340,000 VNĐ",
        rating: "4.4",
        reviews: "161",
        url: "/NUTRIGANO",
      },
      {
        imageSrc: SUPER_CANXI,
        title: "SUPER CANXI ",
        content: "1 lít/chai",
        price: "340,000 VNĐ",
        rating: "5.0",
        reviews: "521",
        url: "/SUPER_CANXI ",
      },
      {
        imageSrc: tangtrong,
        title: "TĂNG TRỌNG ",
        content: "500ml/chai",
        price: "340,000 VNĐ",
        rating: "4.0",
        reviews: "361",
        url: "/tangtrong ",
      },
      {
        imageSrc: VITAAMIN,
        title: "VITA – AMIN ",
        content: "500g, 1kg/lon",
        price: "340,000 VNĐ",
        rating: "5.0",
        reviews: "793",
        url: "/VITAAMIN ",
      },
    ],
    TIÊU_HOÁ: [
      {
        imageSrc: InstructionImage_15,
        title: "AQUA CRUB",
        content: "200g, 500g, 1kg/chai",
        price: "280,000 VNĐ",
        rating: "4.6",
        reviews: "136",
        url: "/AquaCrub",
      },
      {
        imageSrc: C14,
        title: "C 14",
        content: "500g/chai",
        price: "280,000 VNĐ",
        rating: "4.9",
        reviews: "304",
        url: "/C14",
      },
      {
        imageSrc: ENVIZYME,
        title: "ENVIZYME",
        content: "500g/chai",
        price: "280,000 VNĐ",
        rating: "4.3",
        reviews: "745",
        url: "/ENVIZYME",
      },
      {
        imageSrc: FEEDMULTIZYME,
        title: "FEED MULTIZYME",
        content: "1 lít/lon",
        price: "280,000 VNĐ",
        rating: "4.6",
        reviews: "485",
        url: "/FEEDMULTIZYME",
      },
    ],
    MÔI_TRƯỜNG: [
      {
        imageSrc: InstructionImage_3,
        title: "TTZ",
        content: "350g/gói",
        price: "300,000 VNĐ",
        rating: "4.9",
        reviews: "189",
        url: "/TTZ",
      },
      {
        imageSrc: InstructionImage_11,
        title: "ALL CIDE",
        content: "1lit/chai",
        price: "120,000 VNĐ",
        rating: "4.9",
        reviews: "135",
        url: "/AllCide",
      },
      {
        imageSrc: InstructionImage_12,
        title: "TOXIN SSE",
        content: "2 lít/can",
        price: "365,000 VNĐ",
        rating: "5.0",
        reviews: "256",
        url: "/ToxinSSe",
      },
      {
        imageSrc: InstructionImage_16,
        title: "TT - AQUA +",
        content: "250g/gói",
        price: "200,000 VNĐ",
        rating: "4.8",
        reviews: "118",
        url: "/TTAqua",
      },
      {
        imageSrc: PRAZIWS,
        title: "PRAZI WS",
        content: "1kg/chai",
        price: "200,000 VNĐ",
        rating: "4.6",
        reviews: "338",
        url: "/PRAZIWS",
      },
    ],
    NEW: [
      {
        imageSrc: bio_plus,
        title: "BIO - PLUS",
        content: "1kg/sản phẩm",
        price: "200,000 VNĐ",
        rating: "4.6",
        reviews: "338",
        url: "/BioPlus",
      },
      {
        imageSrc: super_kill,
        title: "SUPER KILL",
        content: "1lít/sản phẩm",
        price: "200,000 VNĐ",
        rating: "4.6",
        reviews: "338",
        url: "/SuperKill",
      },
      {
        imageSrc: '',
        title: "DIỆT ỐC",
        content: "1kg/sản phẩm",
        price: "200,000 VNĐ",
        rating: "4.6",
        reviews: "338",
        url: "/DietOc",
      },
      {
        imageSrc: canxu_new,
        title: "CANXI NEW",
        content: "1lít/sản phẩm",
        price: "200,000 VNĐ",
        rating: "4.6",
        reviews: "338",
        url: "/CanxiNew",
      },
      {
        imageSrc: totazyme,
        title: "TOTAZYME",
        content: "1kg/sản phẩm",
        price: "200,000 VNĐ",
        rating: "4.6",
        reviews: "338",
        url: "/Totazyme",
      },
    ],
  },
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  var token = localStorage.getItem("token");

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}
              >
                {index === 0
                  ? "Tất cả"
                  : index === 1
                  ? "Đặc trị bệnh"
                  : index === 2
                  ? "Dinh dưỡng"
                  : index === 3
                  ? "Tiêu hoá"
                  : index === 4
                  ? "Môi trường": "SP Mới"} 
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  href={card.url}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRatingContainer>
                      <CardRating>
                        <StarIcon />
                        {card.rating}
                      </CardRating>
                      <CardReview>({card.reviews})</CardReview>
                    </CardRatingContainer>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto",
                        },
                        rest: {
                          opacity: 0,
                          height: 0,
                        },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>Chi tiết</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>
                      {token === "true" ? card.price : "Liên hệ"}
                    </CardPrice>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
