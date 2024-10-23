import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Header from "../components/headers/light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import tw from "twin.macro";

const Container = tw.div`container mx-auto p-8`;
const Box = tw.div`mb-4`;
const Label = tw.label`block text-sm font-medium text-gray-700`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <h2 class="text-2xl font-bold mb-6">Tạo Sản Phẩm</h2>
        <form action="#" method="POST" enctype="multipart/form-data">
          {/* <!-- Tên sản phẩm --> */}
          <Box>
            <Label
              for="product-name"
            >
              Tên sản phẩm
            </Label>
            <input
              type="text"
              id="product-name"
              name="product-name"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Nhập tên sản phẩm"
              required
            />
          </Box>

          {/* <!-- Hình ảnh --> */}
          <Box>
            <Label
              for="product-image"
            >
              Hình ảnh
            </Label>
            <input
              type="file"
              id="product-image"
              name="product-image"
              class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              required
            />
          </Box>

          {/* <!-- Giá --> */}
          <Box>
            <Label
              for="product-price"
            >
              Giá
            </Label>
            <input
              type="number"
              id="product-price"
              name="product-price"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Nhập giá sản phẩm"
              required
            />
          </Box>

          {/* <!-- Trạng thái --> */}
          <Box>
            <Label
              for="product-status"
            >
              Trạng thái
            </Label>
            <select
              id="product-status"
              name="product-status"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            >
              <option value="còn hàng">Còn hàng</option>
              <option value="hết hàng">Hết hàng</option>
            </select>
          </Box>

          {/* <!-- Mô tả --> */}
          <Box>
            <Label
              for="product-description"
            >
              Mô tả
            </Label>
            <textarea
              id="product-description"
              name="product-description"
              rows="4"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Nhập mô tả sản phẩm"
            ></textarea>
          </Box>

          {/* <!-- Nút Submit --> */}
          <div class="mt-6">
            <button
              type="submit"
              class="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Tạo sản phẩm
            </button>
          </div>
        </form>
      </Container>

      <Footer />
    </AnimationRevealPage>
  );
};
