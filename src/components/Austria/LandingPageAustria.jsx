import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, set } from "firebase/database";
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const firebaseConfig = {
  apiKey: "AIzaSyAf8dDkBtRl78tvwvVwwHAwincNapvop04",
  authDomain: "austria2-f6229.firebaseapp.com",
  databaseURL: "https://austria2-f6229-default-rtdb.firebaseio.com",
  projectId: "austria2-f6229",
  storageBucket: "austria2-f6229.firebasestorage.app",
  messagingSenderId: "630012250653",
  appId: "1:630012250653:web:8f1fdd8ce1601cb7e154f4",
  measurementId: "G-EXMGFX9WLQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

const LandingPageAustria = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '',
    terms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePhoneChange = (value, country) => {
    setFormData(prev => ({
      ...prev,
      phone: value,
      countryCode: country.countryCode.toUpperCase()
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.terms) {
      alert("Please fill all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const leadsRef = ref(database, "leads");
      const newLeadRef = push(leadsRef);

      await set(newLeadRef, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        countryCode: formData.countryCode,
        terms: formData.terms,
        timestamp: new Date().toISOString(),
      });
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        countryCode: '',
        terms: false
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {/* Sticky Header */}
      <div className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md">
        <div className="container mx-auto py-4 h-18 flex items-center justify-between max-w-7xl">
          <div className="cursor-pointer flex items-center gap-2 pl-4">
            <img 
              className="h-8" 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1200px-Flag_of_Austria.svg.png" 
              alt="Austria Logo"
              style={{ width: '32px', height: 'auto' }}
            />
            <span className="text-xl font-semibold">Austria</span>
          </div>
          <div className="pr-4">
            <a href="tel:+8484977234" rel="noreferrer" className="inline-block">
              <button className="bg-transparent px-4 py-2 rounded-md text-gray-800 hover:text-black-600 transition border-2 border-orange-600 bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent">
                Call us 8484977234
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://publicassets.leverageedu.com/abroadConsultantDelhiHero.png" 
            alt="Study Abroad Background"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="container mx-auto px-6 z-10 relative py-12">
          {/* Mobile Layout (460px-1010px) */}
          <div className="lg:hidden flex flex-col items-center">
            <div className="w-full max-w-sm text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-snug text-white">
                Study & Shape Your Future in <span className="text-5xl bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent ml-2">AUSTRIA</span> 
              </h1>
              
              <div className="space-y-4 text-white">
              {[
        "100% Admission Guaranteed",
        <span key="english-courses">
          100% English taught courses<br />for Masters and Bachelors
        </span>,
        "No APS required"
      ].map((item, index) => (
        <div key={index} className="flex gap-3 items-start">
          <div className="flex-shrink-0 pt-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.3751 13.1246C20.6251 16.8746 17.7976 20.4056 13.8301 21.1946C11.8951 21.5799 9.88781 21.345 8.0941 20.5232C6.30039 19.7014 4.81167 18.3346 3.83993 16.6175C2.8682 14.9003 2.46297 12.9204 2.68196 10.9596C2.90094 8.99877 3.73298 7.15702 5.05959 5.69658C7.78059 2.69958 12.3751 1.87458 16.1251 3.37458" stroke="#00A745" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.625 11.625L12.375 15.375L21.375 5.625" stroke="#00A745" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-lg md:text-xl font-medium">
            {item}
          </p>
        </div>
      ))}
              </div>
            </div>

            {/* Form */}
            <div className="w-full max-w-sm">
              <div className="bg-white rounded-xl shadow-lg p-6">
                {/* Form content remains the same */}
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <div className="text-green-600 font-medium mb-2">Thank you for your interest!</div>
                    <p className="text-gray-600">Our team will contact you soon.</p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      Submit Another Response
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { id: "name", label: "Name*", type: "text", placeholder: "Enter Full Name" },
                      { id: "email", label: "Email Address*", type: "email", placeholder: "Enter Email Address" },
                    ].map((field) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          value={formData[field.id]}
                          onChange={handleChange}
                          className="block w-full p-2.5 border border-gray-300 rounded-lg "
                          placeholder={field.placeholder}
                          required
                        />
                      </div>
                    ))}
                    
                    <div className="overflow-visible">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile Number*
                      </label>
                      <div className="relative">
                        <PhoneInput
                          country={'in'}
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          inputClass="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-blue-500"
                          dropdownClass="z-50"
                          containerClass="overflow-visible"
                          inputProps={{
                            required: true,
                            name: 'phone',
                            className: 'w-full p-2.5 px-12 border border-gray-300 rounded-lg '
                          }}
                          enableSearch
                          disableCountryCode
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          checked={formData.terms}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-medium text-gray-700">
                          I agree to the{' '}
                          <a href="#" className="text-blue-600 hover:text-blue-500">
                            Terms
                          </a>{' '}
                          and{' '}
                          <a href="#" className="text-blue-600 hover:text-blue-500">
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-2.5 px-6 bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] text-white font-medium rounded-lg transition duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Layout (1010px and above) */}
          <div className="hidden lg:flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full max-w-2xl lg:w-[50%] text-white pl-2 lg:pl-6">
              <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-snug ">
                Study & Shape your future in 
 <span className="text-5xl bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent ml-4 ">AUSTRIA</span> 
              </h1>
              
              <div className="space-y-4">
                {[
                  "100% Admission Guaranteed",
                  "100% English taught courses for Masters and Bachelors",
                  "No APS required"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 flex-col">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.3751 13.1246C20.6251 16.8746 17.7976 20.4056 13.8301 21.1946C11.8951 21.5799 9.88781 21.345 8.0941 20.5232C6.30039 19.7014 4.81167 18.3346 3.83993 16.6175C2.8682 14.9003 2.46297 12.9204 2.68196 10.9596C2.90094 8.99877 3.73298 7.15702 5.05959 5.69658C7.78059 2.69958 12.3751 1.87458 16.1251 3.37458" stroke="#00A745" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.625 11.625L12.375 15.375L21.375 5.625" stroke="#00A745" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-lg md:text-xl font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full max-w-sm lg:w-[40%]">
              <div className="bg-white rounded-xl shadow-lg p-6">
                {/* Form content remains the same */}
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <div className="text-green-600 font-medium mb-2">Thank you for your interest!</div>
                    <p className="text-gray-600">Our team will contact you soon.</p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      Submit Another Response
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { id: "name", label: "Name*", type: "text", placeholder: "Enter Full Name" },
                      { id: "email", label: "Email Address*", type: "email", placeholder: "Enter Email Address" },
                    ].map((field) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          value={formData[field.id]}
                          onChange={handleChange}
                          className="block w-full p-2.5 border border-gray-300 rounded-lg "
                          placeholder={field.placeholder}
                          required
                        />
                      </div>
                    ))}
                    
                    <div className="overflow-visible">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile Number*
                      </label>
                      <div className="relative">
                        <PhoneInput
                          country={'in'}
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          inputClass="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-blue-500"
                          dropdownClass="z-50"
                          containerClass="overflow-visible"
                          inputProps={{
                            required: true,
                            name: 'phone',
                            className: 'w-full p-2.5 px-12 border border-gray-300 rounded-lg '
                          }}
                          enableSearch
                          disableCountryCode
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          checked={formData.terms}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-medium text-gray-700">
                          I agree to the{' '}
                          <a href="#" className="text-blue-600 hover:text-blue-500">
                            Terms
                          </a>{' '}
                          and{' '}
                          <a href="#" className="text-blue-600 hover:text-blue-500">
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-2.5 px-6 bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] text-white font-medium rounded-lg transition duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageAustria;