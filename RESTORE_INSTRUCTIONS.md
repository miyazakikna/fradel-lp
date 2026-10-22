# FRADEL LP 復元手順書

ローカルの `fradel-lp` ディレクトリを削除した後に、プロジェクトを再構築・復元する手順です。

## リポジトリ情報
- **GitHub URL**: `https://github.com/miyazakikna/fradel-lp.git`
- **主要ブランチ**: `master`

---

## 復元手順

### 1. リポジトリのクローン
ターミナルを開き、復元先ディレクトリへ移動してクローンします。

```bash
cd "/Users/miyazaki/Documents/01_株式会社Amelio/99_過去プロジェクト/2025/FRADEL/01_github"
git clone https://github.com/miyazakikna/fradel-lp.git
cd fradel-lp
```

### 2. 依存パッケージのインストール
Node.js 環境にて以下を実行します。

```bash
npm install
```

### 3. 環境変数（.env）の作成
ルートディレクトリに `.env` を作成します。

```bash
cp .env.example .env
```

お問い合わせ機能（SMTP送信）を利用する場合、以下の内容を設定してください：
```env
NEXT_PUBLIC_SMTP_HOST="mail1016.onamae.ne.jp"
NEXT_PUBLIC_FROM_EMAIL_PASSWORD="<SMTPパスワード>"
# NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=""
```

### 4. 動作確認（開発サーバー起動）
```bash
npm run dev
```
ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスし、LPが表示されることを確認します。

### 5. ビルド確認
```bash
npm run build
```
`✓ Compiled successfully` と表示されればビルド成功です。
