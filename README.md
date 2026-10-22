# FRADEL LP (fradel-lp)

FRADEL ランディングページ（Next.js 15 / Tailwind CSS）

## 技術スタック
- **Framework**: Next.js 15.3.3 (App Router)
- **Library**: React 18 / Lucide React / Framer Motion / Radix UI
- **Styling**: Tailwind CSS / PostCSS
- **Mail**: Nodemailer

## 前提要件
- Node.js (v18.17.0 以上推奨、v20/v22動作確認済み)
- npm または yarn

## セットアップ手順

### 1. リポジトリのクローン
```bash
git clone https://github.com/miyazakikna/fradel-lp.git
cd fradel-lp
```

### 2. 依存パッケージのインストール
```bash
npm install
```

### 3. 環境変数の設定
`.env.example` をコピーして `.env` を作成し、必要な値を設定します。
```bash
cp .env.example .env
```

お問い合わせフォーム機能を使用する場合、以下の設定が必要です：
```env
NEXT_PUBLIC_SMTP_HOST="mail1016.onamae.ne.jp"
NEXT_PUBLIC_FROM_EMAIL_PASSWORD="<SMTPパスワード>"
# NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=""
```

### 4. 開発サーバーの起動
```bash
npm run dev
```
ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

### 5. プロダクションビルド
```bash
npm run build
npm run start
```
