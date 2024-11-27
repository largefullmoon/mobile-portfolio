import { motion } from "framer-motion";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mblrbaqy");
  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12"
        >
          <label htmlFor="email" className="mb-4 font-medium text-white">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <label htmlFor="email" className="mb-4 font-medium text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="px-8 py-3 font-bold text-white shadow-md outline-none bg-tertiary shadow-primary w-fit rounded-xl"
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
