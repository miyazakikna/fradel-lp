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

export const Tokushoho = (): JSX.Element => {
  const sections = [
    {
      title: "販売業者",
      content: "FRADEL（フラデル）"
    },
    {
      title: "運営統括責任者",
      content: "代表取締役 [責任者名]"
    },
    {
      title: "所在地",
      content: "〒[郵便番号] [都道府県][市区町村][番地・建物名]"
    },
    {
      title: "電話番号",
      content: "[電話番号]"
    },
    {
      title: "メールアドレス",
      content: "info@fradel.jp"
    },
    {
      title: "ホームページURL",
      content: "https://fradel.jp"
    },
    {
      title: "商品代金以外の必要料金",
      content: "送料：地域・内容によって300〜600円前後\n消費税：商品代金に含む"
    },
    {
      title: "支払方法",
      content: "クレジットカード決済\n銀行振込\nコンビニ決済"
    },
    {
      title: "支払時期",
      content: "クレジットカード決済：注文確定時\n銀行振込：注文確定後7日以内\nコンビニ決済：注文確定後7日以内"
    },
    {
      title: "商品の引渡時期",
      content: "毎月初旬にお届け\n初回のみ：お申込み確認後、1週間程度でお届け"
    },
    {
      title: "返品・交換について",
      content: "商品の性質上、お客様のご都合による返品・交換はお受けできません。\n商品に不備があった場合は、商品到着後7日以内にご連絡ください。\n不良品については、送料当社負担にて交換いたします。"
    },
    {
      title: "キャンセルについて",
      content: "定期便のキャンセルは、次回お届け予定日の10日前までにご連絡ください。\nお申込み後のキャンセルは、商品発送前に限り承ります。"
    },
    {
      title: "販売価格",
      content: "月額基本料金：2,000円（税込2,200円）\n初回のみ追加料金：1,500円（税込1,650円）\n複数セット割引：2セット以上で1セットあたり200円OFF"
    },
    {
      title: "商品の内容",
      content: "香りパウチ（1ヶ月分）\nリードスティック（4本）\nガラス容器（初回のみ）"
    },
    {
      title: "販売数量",
      content: "制限なし"
    },
    {
      title: "引渡し方法",
      content: "宅配便による配送"
    },
    {
      title: "個人情報の取り扱い",
      content: "お客様からお預かりした個人情報は、商品の発送とご連絡以外には一切使用いたしません。\n当社が責任をもって安全に蓄積・保管し、第三者に譲渡・提供することはございません。\n詳細は「プライバシーポリシー」をご確認ください。"
    },
    {
      title: "その他",
      content: "本サービスのご利用には「利用規約」が適用されます。\nサービス内容は予告なく変更する場合があります。"
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
            特定商取引法に基づく表記
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
            特定商取引法に基づき、以下の通り表示いたします。
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