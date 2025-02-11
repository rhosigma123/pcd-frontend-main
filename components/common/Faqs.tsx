'use client'
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDownIcon } from "lucide-react";

const accordions = [
  {
    id: 1,
    question: "What is ONE VALENCIA Taloja?  ",
    answer: "ONE VALENCIA Taloja is a new real estate project launched in Taloja, designed to provide modern living spaces with a focus on quality, aesthetics, and community amenities.",
  },
  {
    id: 2,
    question: "Where is Taloja located?  ",
    answer: "Taloja is a rapidly developing area in Maharashtra, India, situated close to Navi Mumbai, making it an attractive location for residential and commercial properties.",
  },
  {
    id: 3,
    question: "What amenities are included in the ONE VALENCIA Taloja project?  ",
    answer: "ONE VALENCIA Taloja features a range of amenities such as a swimming pool, gym, landscaped gardens, children's play area, Sport Court, Inhouse Theatre, Intuitive Library and 24/7 security for residents' comfort and convenience.",
  },
  {
    id: 4,
    question: "Are there any financing options available for purchasing a property in ONE VALENCIA Taloja?  ",
    answer: "Yes, we offer various financing options and can connect you with financial institutions that provide loans to help you purchase a property in ONE VALENCIA Taloja.",
  },
  {
    id: 5,
    question: "Is there a payment plan available for buyers?  ",
    answer: "Yes, we offer flexible payment plans to accommodate different buyer needs. Please reach out for detailed information on the available plans",
  },
  {
    id: 6,
    question: "What is the price range of the properties in ONE VALENCIA Taloja?  ",
    answer: "The price range for properties in ONE VALENCIA Taloja starts at 44 lakhs and varies based on the type and size. For the most accurate pricing, please contact us directly.",
  },
  {
    id: 7,
    question: "Can I schedule a visit to the ONE VALENCIA Taloja site?  ",
    answer: "Absolutely! We encourage site visits. Please contact us to arrange a convenient time for your visit.",
  },
  {
    id: 8,
    question: "Are there any ongoing promotional offers for early buyers?  ",
    answer: "Yes, we often have promotional offers for early buyers. Please inquire for the latest offers available for ONE VALENCIA Taloja.",
  },

  {
    id: 9,
    question: "What makes ONE VALENCIA Taloja different from other projects in Taloja?  ",
    answer: "ONE VALENCIA Taloja stands out due to its premium design, quality construction, and focus on community living, combined with strategic location advantages.",
  },
  {
    id: 10,
    question: "How can I contact a sales representative for more information?  ",
    answer: "You can contact us via our website contact form, call us at +91 8655587403.",
  },
  {
    id: 11,
    question: "What is the process for booking a property in ONE VALENCIA?  ",
    answer: "To book a property, you will need to fill out a booking form, provide the necessary documentation, and pay the initial booking amount. Our team will guide you through the entire process.",
  },
  {
    id: 12,
    question: " Will there be any commercial spaces available in ONE VALENCIA Taloja?   ",
    answer: "Currently, ONE VALENCIA Taloja is focused on residential properties. For future developments, please stay tuned for updates.",
  },
  {
    id: 13,
    question: "What are the nearby facilities available to residents of ONE VALENCIA Taloja?",
    answer: "Residents will have access to various nearby facilities, including schools, hospitals, shopping centers, and public transportation, enhancing their living experience.",
  },


  // ... more accordions as needed
];


function Faqs() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenAccordion((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="w-full relative h-auto flex flex-col gap-3">
      <h2 className="text-h2 font-medium text-webaccent w-full">
        Frequently asked questions
      </h2>
      <Accordion type="single" collapsible className="w-full flex flex-col">
            {accordions.map((accordion) => (
              <div
                key={accordion.id}
                className="grid gap-3 sm:gap-5 border  overflow-hidden  rounded-2xl mb-5"
              >
                <AccordionItem
                  value={String(accordion.id)}
                  className="border-none "
                >
                  <AccordionTrigger
                    onClick={() => handleToggle(accordion.id)}
                    className={`text-p18 text-start py-3 sm:py-3 rounded-2xl  ${
                      openAccordion === accordion.id
                        ? "bg-webaccent text-white"
                        : "bg-white text-webaccent"
                    } border-[#E8E8E8] md:px-10 hover:no-underline overflow-hidden transition-all ease-linear`}
                  >
                    <div>
                      <span
                        className={`${
                          openAccordion === accordion.id
                            ? "text-white"
                            : "text-webaccent"
                        } text-lg rounded-2xl overflow-hidden font-normal`}
                      >
                        {accordion.question}
                      </span>
                    </div>
                    <ChevronDownIcon />
                  </AccordionTrigger>
                  <AccordionContent
                    className={`accordion-content text-p18 text-start p-3 sm:p-5 bg-white border-[#E8E8E8] px-5 md:px-10 ${
                      openAccordion === accordion.id ? "open" : ""
                    }`}
                  >
                    <div>
                      <span className="text-p18 font-[400] not-italic leading-tight  text-[#404040]">
                        {accordion.answer}
                      </span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
    </section>
  );
}

export default Faqs;
