'use client';
import { useSubmit } from '@formspree/react';
import { useForm } from 'react-hook-form';

type Inputs = {
  email: string;
  message: string;
  name: string;
};

const GetInTouch = () => {
    const {
    formState: { errors, isSubmitSuccessful, isSubmitting },
    handleSubmit,
    register,
    setError,
    reset,
  } = useForm<Inputs>({
    defaultValues: { email: '', message: '' }, 
  });

  const submit = useSubmit<Inputs>(
    process.env.NEXT_PUBLIC_REACT_HOOK_FORM_ID as string,
    {
      onError(errs) {
        const formErrs = errs.getFormErrors();
        for (const { code, message } of formErrs) {
          setError(`root.${code}`, {
            type: code,
            message,
          });
        }

        const fieldErrs = errs.getAllFieldErrors();
        for (const [field, errs] of fieldErrs) {
          setError(field, {
            message: errs.map((e) => e.message).join(', '),
          });
        }
      },
    }
  );

  if(isSubmitSuccessful) {
    reset()
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
        onSubmit={handleSubmit(submit)}
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
              {...register('email')}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            {...register('message')}
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Write your message here"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default GetInTouch;
