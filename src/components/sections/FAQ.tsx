'use client';
import {useState} from 'react';
import SectionHeading from '../ui/SectionHeading';
import {GoPlus} from 'react-icons/go';
import {PiMinusLight} from 'react-icons/pi';

type AccordionItem = {
  title: string;
  content: string;
};

const items: AccordionItem[] = [
  {
    title: 'Is the app free to use?',
    content:
      'Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.',
  },
  {
    title: 'Can I assign multiple employees to one job?',
    content:
      'Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.',
  },
  {
    title: 'Does it work on both mobile and desktop?',
    content:
      'Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="mb-40">
      <SectionHeading
        heading="What Our Users Are Saying"
        desc="Real stories from clients, employees, and business owners who use our app."
      />

      <div className="mt-16">
        <div className="w-full max-w-[996px] mx-auto space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-[1px] border-[#C7E6C5] rounded-xl p-6 shadow-sm overflow-hidden ">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-base text-[#212B36] text-left font-semibold transition cursor-pointer">
                {item.title}
                <span
                  className={`transform transition-transform duration-1000`}>
                  {openIndex === index ? <PiMinusLight /> : <GoPlus />}
                </span>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-40 p-4' : 'max-h-0'
                }`}>
                <p className="text-[#637381] text-sm font-normal">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
