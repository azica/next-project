import { Suspense } from "react";

import Filters from "@/components/blocks/Filters";
import Pagination from "@/components/blocks/Pagination";
import Sort from "@/components/blocks/Sort";
import Container from "@/components/layout/Container";

import Loading from "./loading";

const ShopLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Container className="flex gap-10">
      <div className="">
        <Filters />
      </div>
      <div className="flex-1 mt-4 pt-1">
        <Sort />
        <div className="mt-8">
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Pagination />
        </div>
      </div>
    </Container>
  )
  }
export default ShopLayout;
