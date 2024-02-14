import { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";


export const metadata: Metadata = {
    title: "about | next opp",
    description: "Generated by create next app",
  };

  
export default function AboutLayot ({
    children
}:{
    children: ReactNode;
}){
  return <div>

    <ul>
        <li>
            <Link href="/about/contact">Contacts</Link>
        </li>
        <li>
            <Link href="/about/team">Team</Link>
        </li>
    </ul>

    {children}
  </div>
}