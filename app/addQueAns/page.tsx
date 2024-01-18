import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const AddQueAns = async () => {
  const superbase = createServerComponentClient<Database>({ cookies });
  const { data } = await superbase.from("QueAns").select();
  return (
    <Accordion type="single" collapsible className="w-full">
      {data?.map((data) => (
        <AccordionItem key={data.id} value={data.id}>
          <AccordionTrigger>{data.que}</AccordionTrigger>
          <AccordionContent>{data.ans}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AddQueAns;
