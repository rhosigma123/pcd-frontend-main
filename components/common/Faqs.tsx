import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function Faqs() {
  return (
    <section className="w-full relative h-auto flex flex-col gap-3">
      <h2 className="text-h2 font-medium text-webaccent w-full">
        Frequently asked questions
      </h2>
      <Accordion type="single" collapsible className="w-full">

        <AccordionItem value="item-1" className="w-full relative h-auto ">
          <AccordionTrigger className="w-full text-webaccent relative text-xl h-auto px-4 py-2 rounded-lg bg-websecondary">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="w-full relative py-4 text-lg px-4 text-start text-webtext font-medium">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="w-full relative h-auto mt-2 ">
        <AccordionTrigger className="w-full text-webaccent relative text-xl h-auto px-4 py-2  rounded-lg bg-websecondary">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="w-full relative py-4 text-lg px-4 text-start text-webtext font-medium">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="w-full relative h-auto   mt-2 ">
        <AccordionTrigger className="w-full text-webaccent relative text-xl h-auto px-4 py-2  rounded-lg bg-websecondary">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="w-full relative py-4 text-lg px-4 text-start text-webtext font-medium">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="w-full relative h-auto  mt-2">
        <AccordionTrigger className="w-full text-webaccent relative text-xl h-auto px-4 py-2  rounded-lg bg-websecondary">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="w-full relative py-4 text-lg px-4 text-start text-webtext font-medium">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </section>
  );
}

export default Faqs;
