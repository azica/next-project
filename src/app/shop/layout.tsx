import { PropsWithChildren } from "react";

export default function ShopLayout({children}: PropsWithChildren){
return <>
<h1>Layout</h1>
    {children}
</>
}