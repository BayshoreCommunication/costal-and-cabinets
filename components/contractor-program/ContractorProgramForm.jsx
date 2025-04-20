"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Link from "next/link";

const ContractorProgramForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    trade: "",
    license: "",
    ein: "",
    officePhone: "",
    cellPhone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "";
    const templateID = "";
    const publicKey = "";

    try {
      await emailjs.send(serviceID, templateID, formData, publicKey);
      setLoading(false);
      Swal.fire({
        icon: "success",
        title: "Submitted!",
        text: "Your contractor form has been submitted successfully.",
      });
      setFormData({
        companyName: "",
        ownerName: "",
        trade: "",
        license: "",
        ein: "",
        officePhone: "",
        cellPhone: "",
        email: "",
      });
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "There was an error sending your form. Please try again later.",
      });
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="bg-[#eff2f5]">
      <div className="container py-10 md:py-20">
        <form className="max-w-6xl mx-auto p-4 md:p-8" onSubmit={handleSubmit}>
          <h2 className="text-center text-2xl lg:text-3xl text-[#222222] font-[700] mb-3 lg:mb-5 xl:mb-8  ">
            Contractor Program Form
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium">
                Company Name:<span className="text-red-600">*</span>
              </label>
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="bg-white border border-black text-black text-base rounded focus:ring-secondary focus:border-secondary block w-full p-3 mt-1"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">
                Owner’s Name:<span className="text-red-600">*</span>
              </label>
              <input
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                required
                className="bg-white border border-black text-black text-base rounded focus:ring-secondary focus:border-secondary block w-full p-3 mt-1"
                placeholder="Owner’s Name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">
                Trade:<span className="text-red-600">*</span>
              </label>
              <input
                name="trade"
                value={formData.trade}
                onChange={handleChange}
                required
                className="bg-white border border-black text-black text-base rounded focus:ring-secondary focus:border-secondary block w-full p-3 mt-1"
                placeholder="Trade"
              />
            </div>
            <div>
              <label className="text-sm font-medium">
                License No.:<span className="text-red-600">*</span>
              </label>
              <input
                name="license"
                value={formData.license}
                onChange={handleChange}
                required
                className="bg-white border border-black text-black text-base rounded focus:ring-secondary focus:border-secondary block w-full p-3 mt-1"
                placeholder="License No."
              />
            </div>
            <div>
              <label className="text-sm font-medium">
                EIN:<span className="text-red-600">*</span>
              </label>
              <input
                name="ein"
                value={formData.ein}
                onChange={handleChange}
                required
                className="bg-white border border-black text-black text-base rounded focus:ring-secondary focus:border-secondary block w-full p-3 mt-1"
                placeholder="xx - xxxxxxx"
              />
            </div>
            <div>
              <label className="text-sm font-medium">
                Office Phone Number:<span className="text-red-600">*</span>
              </label>
              <input
                name="officePhone"
                value={formData.officePhone}
                onChange={handleChange}
                required
                className="bg-white border border-black text-black text-base rounded focus:ring-secondary focus:border-secondary block w-full p-3 mt-1"
                placeholder="xxx - xxx - xxxx"
              />
            </div>
            <div>
              <label className="text-sm font-medium">
                Cell Number:<span className="text-red-600">*</span>
              </label>
              <input
                name="cellPhone"
                value={formData.cellPhone}
                onChange={handleChange}
                required
                className="bg-white border border-black text-black text-base rounded focus:ring-secondary focus:border-secondary block w-full p-3 mt-1"
                placeholder="xxx - xxx - xxxx"
              />
            </div>
            <div>
              <label className="text-sm font-medium">
                Email:<span className="text-red-600">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white border border-black text-black text-base rounded focus:ring-secondary focus:border-secondary block w-full p-3 mt-1"
                placeholder="@"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <div className="group mt-8 inline-block">
              <Link href={""}>
                <button className="relative overflow-hidden bg-primary text-white py-2 lg:py-3 lg:px-8 px-4 rounded-md">
                  <span className="relative z-10 transition-colors duration-300">
                    {loading ? "Sending..." : "Send Message →"}
                  </span>
                  <span className="absolute inset-0 bg-secondary z-0 transform scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContractorProgramForm;
