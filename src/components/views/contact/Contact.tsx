import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useForm } from 'react-hook-form';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const Contact = (): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  type TFormValues = {
    name: string;
    email: string;
    message: string;
  }

  const onSubmit = async (data: TFormValues) => {
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const inquiryTypes = [
    { value: 'service', label: 'サービスに関するお問い合わせ' },
    { value: 'technical', label: '技術的な問題' },
    { value: 'billing', label: '料金・支払いについて' },
    { value: 'partnership', label: '提携・協業について' },
    { value: 'other', label: 'その他' }
  ];

  // if (isSubmitted) {
  //   return (
  //     <section className="w-full max-w-6xl mx-auto bg-white py-20 md:py-24 relative px-4">
  //       <div className="max-w-2xl mx-auto text-center">
  //         <div className="bg-green-50 border border-green-200 rounded-lg p-8">
  //           <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
  //             <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  //             </svg>
  //           </div>
  //           <h2 className="text-2xl font-bold text-gray-800 mb-4">
  //             お問い合わせを受け付けました
  //           </h2>
  //           <p className="text-gray-600 leading-relaxed">
  //             お問い合わせいただき、ありがとうございます。<br />
  //             内容を確認の上、2〜3営業日以内にご連絡いたします。
  //           </p>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section className="w-full max-w-1440 mx-auto bg-white py-20 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            お問い合わせ
          </h1>
          <div className="w-16 h-1 bg-gray-600 mx-auto mb-6" />
        </motion.div>

        <motion.div
          className="bg-gray-50 rounded-lg p-6 mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-sm leading-relaxed">
            サービスに関するご質問やご相談がございましたら、お気軽にお問い合わせください。
          </p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          variants={fadeInUp}
          className="space-y-6 bg-white p-8 rounded-lg shadow-md"
        >
          <motion.div variants={fadeInUp} className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              お名前
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "お名前は必須です" })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="山田 太郎"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "メールアドレスは必須です",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "正しいメールアドレスを入力してください"
                }
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="example@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              お問い合わせ内容
            </label>
            <textarea
              id="message"
              rows={4}
              {...register("message", { required: "お問い合わせ内容は必須です" })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="お問い合わせ内容をご記入ください。"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </motion.div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            variants={fadeInUp}
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 disabled:opacity-50"
          >
            {isSubmitting ? "送信中..." : "送信"}
          </motion.button>

          {/* {isSubmitSuccessful && (
            <motion.p variants={fadeInUp} className="text-green-600 text-center mt-4">
              送信が完了しました。ありがとうございました！
            </motion.p>
          )} */}
        </motion.form>
      </div>
    </section>
  );
}