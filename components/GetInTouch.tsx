'use client';
import { useForm, ValidationError } from '@formspree/react';

const GetInTouch = () => {
  const [state, handleSubmit] = useForm("mgveapne");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }


  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-6" id='contact'>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 tracking-wider">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6"
      >
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="w-full mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Write your message here"
            required
          />
        </div>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        <div className="text-center">
          <button
            type="submit"
            disabled={state.submitting}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            Send Message
          </button>
        </div>
      </form>
      {status && (
        <p className="mt-4 text-center text-lg text-green-600">{status}</p>
      )}
    </section>
  );
};

export default GetInTouch;
