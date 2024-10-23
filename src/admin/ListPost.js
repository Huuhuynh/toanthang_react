import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Header from "../components/headers/light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import tw from "twin.macro";

const Table = tw.table`min-w-full table-auto`;
const Thead = tw.thead`bg-gray-200`;
const Th = tw.th`px-4 py-2 text-left`;
const Tr = tw.tr`bg-white`;
const Td = tw.td`border px-4 py-2`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Table>
        <Thead>
          <tr>
            <Th>STT</Th>
            <Th>Tên sản phẩm</Th>
            <Th>Trạng thái</Th>
            <Th>Giá</Th>
            <Th>Ghi chú</Th>
          </tr>
        </Thead>
        <tbody>
          <Tr>
            <Td>1</Td>
            <Td>Sản phẩm A</Td>
            <Td>Còn hàng</Td>
            <Td>$100</Td>
            <Td>Ghi chú 1</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>Sản phẩm B</Td>
            <Td>Hết hàng</Td>
            <Td>$200</Td>
            <Td>Ghi chú 2</Td>
          </Tr>
        </tbody>
      </Table>

      <Footer />
    </AnimationRevealPage>
  );
};
