"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  const onSubmit = async (data) => {
    setFormData(data);
    setModalOpen(true);
  };

  const confirmAndSend = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/senEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        reset();
        setModalOpen(false);
      } else {
        alert("Failed to send message. Try again later.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="w-[80%] mx-auto p-6 bg-primary-bg rounded-lg mt-10 font-sans">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-16 text-center">
          <h1 className="text-3xl mb-4 font-bold dark:text-white text-zinc-900 uppercase">Contact Us</h1>
          <p>Have questions? Get in touch with us!</p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Your Name"
            className="p-3 bg-zinc-900 rounded"
          />
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Your Email"
            className="p-3 bg-zinc-900 rounded"
          />
        </div>

        <div className="mt-4">
          <textarea
            {...register("message", { required: true })}
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 bg-zinc-900 rounded"
          ></textarea>
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-zinc-700 text-white font-semibold rounded hover:bg-zinc-900 transition duration-400 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      {/* Confirmation Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-zinc-800 p-6 rounded-lg w-[90%] max-w-md text-center">
            <h2 className="text-xl font-bold">Confirm Your Message</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Message: {formData.message}</p>
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-zinc-900 rounded hover:bg-gray-400"
              >
                Edit
              </button>
              <button
                onClick={confirmAndSend}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? "Sending..." : "Confirm and Send"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
