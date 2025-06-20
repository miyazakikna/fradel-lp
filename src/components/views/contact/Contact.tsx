import React, { useState } from 'react';
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from 'react-hook-form';
import { Card, CardContent } from "@/components/elements/card";
import { Separator } from "@/components/elements/separator";
import { postData, sleep } from '@/lib/utils';

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
  const [isSuccess, setSuccess] = useState<boolean>(false)
  const [isFailed, setFailed] = useState(false);
  const [isLoading, setLoading] = useState(false);

  type TFormValues = {
    name: string;
    email: string;
    message: string;
  }
  const { register, handleSubmit, formState: { errors }, reset } = useForm<TFormValues>();

  const onSubmit: SubmitHandler<TFormValues> = async (data) => {
    try {
      setLoading(true)
      await sleep(2000)
      await postData('/api/contact', {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      setSuccess(true)
      reset()
    } catch (err) {
      setFailed(true)
    } finally {
      setLoading(false)
    }
  };

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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">
            お問い合わせ
          </h1>
          <Separator className="w-16 h-1 bg-gray-600 mx-auto mb-6" />
        </motion.div>

        <motion.div
          className="bg-neutral-100 rounded-lg p-6 mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-sm leading-relaxed">
            サービスに関するご質問やご相談がございましたら、お気軽にお問い合わせください。
          </p>
        </motion.div>

        <div>
          {isSuccess ? (
            <Card className="bg-green-50 border border-green-200 rounded-xl shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  お問い合わせを受け付けました
                </h2>
                <p className="text-gray-600">
                  内容を確認の上、2〜3営業日以内にご連絡いたします。
                </p>
              </CardContent>
            </Card>
          ) : (
            isFailed ? (
              <Card className="bg-red-50 border border-red-200 rounded-xl shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    送信に失敗しました
                  </h2>
                  <p className="text-gray-600">
                    通信状況などをご確認の上、もう一度お試しください。
                  </p>
                  <button
                    onClick={() => setFailed(false)}
                    className="mt-4 inline-block px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
                  >
                    フォームに戻る
                  </button>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white rounded-xl shadow-lg border border-gray-200">
                <CardContent className="p-4 md:p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 " noValidate>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700">
                        お名前
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name", { required: "お名前を入力してください" })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-1 focus:ring-black"
                        placeholder="山田 太郎"
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name.message as string}</p>}
                    </motion.div>

                    <motion.div variants={fadeInUp} className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700">
                        メールアドレス
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: "メールアドレスを入力してください",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "正しいメールアドレスを入力してください"
                          }
                        })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-1 focus:ring-black"
                        placeholder="example@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email.message as string}</p>}
                    </motion.div>

                    <motion.div variants={fadeInUp} className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-bold text-gray-700">
                        お問い合わせ内容
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        {...register("message", { required: "お問い合わせ内容を入力してください" })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 resize-none focus:outline-none focus:ring-1 focus:ring-black"
                        placeholder="お問い合わせ内容をご記入ください。"
                      />
                      {errors.message && <p className="text-red-500 text-sm">{errors.message.message as string}</p>}
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      variants={fadeInUp}
                      {...(!isLoading && {
                        whileHover: { scale: 1.02 },
                        whileTap: { scale: 0.98 },
                      })}
                      className="flex justify-center text-center w-full mx-auto max-w-80 bg-black text-white font-bold py-3 px-6 rounded-md hover:bg-gray-800 transition-all duration-300 disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "送信中..." : "送信"}
                    </motion.button>
                  </form>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </section >
  );
};