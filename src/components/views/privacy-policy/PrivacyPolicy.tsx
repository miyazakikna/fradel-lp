'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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

export const PrivacyPolicy = (): JSX.Element => {
  const sections = [
    {
      title: "第1条（個人情報）",
      content: [
        "本プライバシーポリシーにおいて、「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。"
      ]
    },
    {
      title: "第2条（個人情報の収集方法）",
      content: [
        "当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレスなどの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を当社の提携先（情報提供元、広告主、広告配信先などを含みます）などから収集することがあります。"
      ]
    },
    {
      title: "第3条（個人情報を収集・利用する目的）",
      content: [
        "当社が個人情報を収集・利用する目的は以下のとおりです。",
        "1. 当社サービスの提供・運営のため",
        "2. ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）",
        "3. メンテナンス、重要なお知らせなど必要に応じたご連絡のため",
        "4. 利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため",
        "5. 上記の利用目的に付随する目的"
      ]
    },
    {
      title: "第4条（利用目的の変更）",
      content: [
        "当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。"
      ]
    },
    {
      title: "第5条（個人情報の第三者提供）",
      content: [
        "当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。",
        "1. 法令に基づく場合",
        "2. 人の生命、身体または財産の保護のために必要がある場合で、本人の同意を得ることが困難であるとき",
        "3. 公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合で、本人の同意を得ることが困難であるとき",
        "4. 国の機関や地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合で、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき"
      ]
    },
    {
      title: "第6条（個人情報の開示）",
      content: [
        "当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、全部または一部を開示しないこともあり、その場合にはその旨を遅滞なく通知します。",
        "1. 本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合",
        "2. 当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合",
        "3. その他法令に違反することとなる場合"
      ]
    },
    {
      title: "第7条（個人情報の訂正および削除）",
      content: [
        "ユーザーは、当社の保有する自己の個人情報が誤った情報である場合には、当社所定の手続きにより、当社に対して個人情報の訂正、追加または削除を請求することができます。"
      ]
    },
    {
      title: "第8条（個人情報の利用停止等）",
      content: [
        "当社は、本人から、個人情報が利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、その利用の停止または消去を求められた場合には、遅滞なく必要な調査を行い、その結果に基づき、個人情報の利用停止等を行い、その旨本人に通知します。"
      ]
    },
    {
      title: "第9条（プライバシーポリシーの変更）",
      content: [
        "本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。"
      ]
    },
    {
      title: "第10条（お問い合わせ窓口）",
      content: [
        "本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。",
        "運営者：株式会社Amelio",
        "Eメールアドレス：info@amelio.co.jp"
      ]
    }
  ];

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
            プライバシーポリシー
          </h1>
          <div className="w-16 h-1 bg-gray-600 mx-auto mb-6" />
          {/* <p className="text-gray-600 text-sm">
            最終更新日：2025年1月17日
          </p> */}
        </motion.div>

        <motion.div
          className="bg-gray-50 rounded-lg p-6 mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-sm leading-relaxed">
            このプライバシーポリシー（以下「本ポリシー」といいます。）は、FRADEL（以下「当社」といいます。）が提供するサービス（以下「本サービス」といいます。）において、ユーザーの個人情報の取扱いに関する方針を定めたものです。
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
              variants={fadeInUp}
            >
              <h2 className="text-lg font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200">
                {section.title}
              </h2>
              <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};