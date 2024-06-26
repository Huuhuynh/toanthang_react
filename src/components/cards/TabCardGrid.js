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
import InstructionImage_1 from "../../images/product/bg1.jpg";
import InstructionImage_2 from "../../images/product/bg2.jpg";
import InstructionImage_3 from "../../images/product/bg3.jpg";
import InstructionImage_4 from "../../images/product/bg4.jpg";
import InstructionImage_5 from "../../images/product/bg5.jpg";
import InstructionImage_6 from "../../images/product/bg6.jpeg";
import InstructionImage_7 from "../../images/product/bg7.jpg";
import InstructionImage_8 from "../../images/product/bg9.png";
import InstructionImage_9 from "../../images/product/bg10.png";
import InstructionImage_10 from "../../images/product/bg11.jpg";
import InstructionImage_11 from "../../images/product/bg12.jpg";
import InstructionImage_12 from "../../images/product/bg15.jpg";
import InstructionImage_13 from "../../images/product/bg16.jpg";
import InstructionImage_14 from "../../images/product/bg17.jpeg";
import InstructionImage_15 from "../../images/product/bg18.jpg";
import InstructionImage_16 from "../../images/product/bg21.jpg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
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
    ĐẶC_TRỊ_BỆNH: [
      {
        imageSrc: InstructionImage_2,
        title: "TT- HEPA FIX",
        content: "200g/lon",
        price: "310,000 VNĐ",
        rating: "4.8",
        reviews: "32",
        url: "/TTHepaFix",
      },
      {
        imageSrc: InstructionImage_5,
        title: "TT- LIVER BOOST",
        content: "200g/lon",
        price: "395,000 VNĐ",
        rating: "4.2",
        reviews: "19",
        url: "/TTLiverBoost",
      },
      {
        imageSrc: InstructionImage_7,
        title: "TT - LIVER SUR",
        content: "1 lít/chai",
        price: "350,000 VNĐ",
        rating: "4.2",
        reviews: "95",
        url: "/TTLiverSur",
      },
      {
        imageSrc: InstructionImage_9,
        title: "ĐẶC TRỊ ĐỤC CƠ",
        content: "500g/ lon",
        price: "945,000 VNĐ",
        rating: "4.9",
        reviews: "210",
        url: "#",
      },
      {
        imageSrc: InstructionImage_10,
        title: "SULBAC",
        content: "200g/lon",
        price: "365,000 VNĐ",
        rating: "3.9",
        reviews: "26",
        url: "/SulBSC",
      },
      {
        imageSrc: InstructionImage_13,
        title: "LIVER TONIC",
        content: "200g/lon",
        price: "365,000 VNĐ",
        rating: "4.6",
        reviews: "162",
        url: "/LiverTonic",
      },
    ],
    DINH_DƯỠNG: [
      {
        imageSrc: InstructionImage_1,
        title: "Chống Stress",
        content: "1 lít/chai - 20 chai/ thùng",
        price: "Giá: Liên hệ",
        rating: "5.0",
        reviews: "87",
        url: "/chongstress",
      },
      {
        imageSrc: InstructionImage_14,
        title: "NUTRI - PRO",
        content: "500g/lon",
        price: "Giá: Liên hệ",
        rating: "4.7",
        reviews: "159",
        url: "/nutripro",
      },
      {
        imageSrc: InstructionImage_8,
        title: "AQUA BUSAL - B12",
        content: "500ml/chai",
        price: "290,000 VNĐ",
        rating: "3.9",
        reviews: "26",
        url: "#",
      },
      {
        imageSrc: InstructionImage_4,
        title: "TT - PATHO STOP",
        content: "500ml/chai",
        price: "355,000 VNĐ",
        rating: "4.6",
        reviews: "12",
        url: "/ttpathostop",
      },
      {
        imageSrc: InstructionImage_6,
        title: "INOBITOL",
        content: "500g/lon",
        price: "340,000 VNĐ",
        rating: "5.0",
        reviews: "61",
        url: "/inobitol",
      },
    ],
    TIÊU_HOÁ: [
      {
        imageSrc: InstructionImage_15,
        title: "AQUA CRUB",
        content: "200g/lon",
        price: "280,000 VNĐ",
        rating: "4.6",
        reviews: "216",
        url: "/AquaCrub",
      },
    ],
    MÔI_TRƯỜNG: [
      {
        imageSrc: InstructionImage_3,
        title: "TTZ",
        content: "350g/gói",
        price: "300,000 VNĐ",
        rating: "4.9",
        reviews: "89",
        url: "/TTZ",
      },
      {
        imageSrc: InstructionImage_11,
        title: "ALL CIDE",
        content: "2lit/ cal",
        price: "120,000 VNĐ",
        rating: "4.9",
        reviews: "135",
        url: "/AllCide",
      },
      {
        imageSrc: InstructionImage_12,
        title: "TOXIN SSE",
        content: "200g/lon",
        price: "365,000 VNĐ",
        rating: "3.9",
        reviews: "26",
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
                {tabName}
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
                    <CardPrice>{token === "true" ? card.price : "Liên hệ"}</CardPrice>
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

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chicken Chilled",
      content: "Chicken Main Course",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Samsa Beef",
      content: "Fried Mexican Beef",
      price: "$3.99",
      rating: "4.5",
      reviews: "34",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Carnet Nachos",
      content: "Chilli Crispy Nachos",
      price: "$3.99",
      rating: "3.9",
      reviews: "26",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Guacamole Mex",
      content: "Mexican Chilli",
      price: "$3.99",
      rating: "4.2",
      reviews: "95",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chillie Cake",
      content: "Deepfried Chicken",
      price: "$2.99",
      rating: "5.0",
      reviews: "61",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Nelli",
      content: "Hamburger & Fries",
      price: "$7.99",
      rating: "4.9",
      reviews: "89",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Jalapeno Poppers",
      content: "Crispy Soyabeans",
      price: "$8.99",
      rating: "4.6",
      reviews: "12",
      url: "#",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Cajun Chicken",
      content: "Roasted Chicken & Egg",
      price: "$7.99",
      rating: "4.2",
      reviews: "19",
      url: "#",
    },
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
