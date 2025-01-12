import React from 'react';
import { CONTACT } from '../constants';
// import * as motion from "motion/react-client"
import { motion } from "motion/react";

const Contacts = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -150 }}
      transition={{ duration: 1 }}
      className="border-b border-neutral-900 pb-20"
    >
      <h2 className="my-10 text-center text-4xl">
        Contact <span className="text-neutral-500">Me</span>
      </h2>
      <div className="tracking-tighter text-center">
        <p className="my-4">{CONTACT.address}</p>

        {/* Add onClick for Phone Number */}
        <p
          onClick={() => window.open(`tel:${CONTACT.phoneNo}`, "_self")}
          className="my-4 cursor-pointer text-orange-600 hover:underline"
        >
          {CONTACT.phoneNo}
        </p>

        {/* Email is already functional */}
        <a
          href={`mailto:${CONTACT.email}`}
          className="my-4 border-b text-orange-600 hover:underline"
        >
          {CONTACT.email}
        </a>
      </div>
    </motion.div>
  );
};

export default Contacts;
