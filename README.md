<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  IEICE Communication Society Editorial Board
</h1>

このサイトは [Gatsby](https://www.gatsbyjs.com/) を使って作成しています．

### 注意：

Github のアカウントがあることを前提にしています。

大学関係者であれば[Github Pro アカウント](https://docs.github.com/ja/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research/apply-for-an-educator-or-researcher-discount)を取得できます。

また、ビルドには `yarn` もしくは　`npm` が必要になります。

## 🚀 インストール

まず、Github からクローンします。
適当な作業ディレクトに移動して、以下を実行。

```
% git clone git@github.com:Github-ID/IEICE-CS-edit.git
```

ここで`Github-ID`は Github のアカウント名です。

クローンしたディレクトに移動し、そこで作業します。

```
% cd IEICE-CS-edit/
% ls
CODE_OF_CONDUCT.md       LICENSE                  README.md                gatsby-config.js         lambda                   node_modules             public                   static
CONTRIBUTING.md          PULL_REQUEST_TEMPLATE.md _headers                 gatsby-node.js           netlify.toml             package.json             src                      yarn.lock
```

🧐 What's inside?

ディレクトリは以下のようになっています．

```
$ tree -L 1
.
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── PULL_REQUEST_TEMPLATE.md
├── README.md
├── _headers
├── gatsby-config.js
├── gatsby-node.js
├── lambda
├── netlify.toml
├── node_modules
├── package.json
├── public
├── src
├── static
└── yarn.lock

5 directories, 11 files

```

以下，重要なものだけ説明します．

/node_modules:
ここに npm package でインストールしたモジュールが入ります．
このディレクトリに対して特段のアクションは必要ありません．ほっとけば良いです．

/src:
このディレクトリに公開用のファイルが一式入ります．
つまり，ブラウザで表示するのに必要なファイルが格納されています．
従って，このディレクトリに入っているファイルの修正，追加，削除することで Web ページのデザインを行います．

/static:
このディレクトリは，Gatsby では参照されるのみで特段の操作は行いません．
従って，こちらには画像ファイルや既に作成してある静的ファイルなどをおきます．
画像ファイルは`/static/img/`にあります。なお、イラストレータで作成した元データも入っていますので、適宜修正の上ご利用下さい。

/public:
公開用のディレクトリです．
gatsby build を実行すると，このディレクトリに公開用ファイルが生成されます．
また，gatsby clean を実行すると，このディレクトリとキャッシュがクリアされます．

.gitignore:
Github リポジトリから除外するファイルを指定します．

gatsby-config.js:
Gatsby サイトの設定ファイルです．

gatsby-node.js:
Gatsby Node API の設定ファイルです．

package-lock.json (See package.json below, first).
npm によって自動生成されるファイルです．

package.json:
Node で実行するパッケージを指定するファイルです．

README.md:
このファイルです．

### 環境構築

`yarn` で環境構築を行います。

```
% yarn
```

`npm install` でも OK ですが、`yarn`の方が早いです。
なお、`yarn`と`npm`を混在して使うと誤動作する場合がありますので、やめましょう。

## ビルド (build)

ビルドとは、サイトを公開するための html, Javascript や CSS ファイルを作成することを言います。
ビルドが通れば Warning が出ても問題ありません。

ビルドは以下のコマンドで実行できます。

```
% gatsby clean && gatsby build
(yarn run clean; yarn run build でもOK)
```

最初の `gatsby clean` はキャッシュや不要ファイルを削除するコマンドです。
`yarn run clean, yarn run build` は `package.json`で定義されています。

## ディベロプ (develop)

ディベロプとは、公開前の一次チェックをするために html, Javascript や CSS ファイルを作成することを言います。

```
% gatsby clean && gatsby develop
(yarn run clean; yarn run develop でもOK)
```

http://localhost:8000/ で見ることができます．

## 公開

Github Actions を設定してありますので，github の main branch に push すると自動でスクリプトが走り，公開ファイルを転送します．
Github Actions の設定ファイルは `.github/workflows/manual.yml` です．

# コンテンツの追加，修正，削除

コンテンツデータは，src/pages に入っているマークダウンファイルです．

```
├── cms
│   ├── cms.js
│   └── preview-templates
│       ├── AwardsPagePreview.js
│       ├── BlogPostPreview.js
│       └── RecommendationsPagePreview.js
├── components
│   ├── BlogRoll.js
│   ├── Content.js
│   ├── Footer.js
│   ├── Layout.js
│   ├── Navbar.js
│   ├── PreviewCompatibleImage.js
│   ├── SiteMetadata.js
│   ├── all.sass
│   └── seo.js
├── images
│   ├── gatsby-icon.png
│   └── profile-pic.png
├── img
│   ├── cslogo.svg
│   ├── github-icon.svg
│   ├── home-jumbotron.jpg
│   ├── logo.svg
│   └── social
│       ├── facebook.svg
│       ├── instagram.svg
│       ├── twitter.svg
│       ├── vimeo.svg
│       └── youtube.svg
├── pages
│   ├── 404.js
│   ├── awards
│   │   └── index.md
│   ├── contact
│   │   └── index.js
│   ├── index.md
│   ├── news
│   │   ├── 2020-11-01-Recommended-Presentations-by-Editorial-Board.md
│   │   ├── 2020-12-1-2020-Fall-Recommended-Presentations-by-Editorial-Board.md
│   │   ├── 2020-12-4-why-should-we-write-a-paper.md
│   │   ├── 2021-04-08-ieice-transactions-and-comex-have-accepted-all-non-member-submission-since-april-1st.md
│   │   ├── 2021-05-18-the-2021-first-editorial-board-meeting-was-held.md
│   │   ├── 2021-10-5-Paper-Recommendation-System.md
│   │   ├── 2021-11-01-Recommended-Presentations-by-Editorial-Board.md
│   │   ├── 2021-6-24-2021-Spring-Recommended-Presentations-by-Editorial-Board.md
│   │   ├── 2021-9-1-Be-A-Two-Way-Player.md
│   │   └── index.js
│   ├── recommendations
│   │   └── index.md
│   └── tags
│       └── index.js
└── templates
    ├── awards-page.js
    ├── blog-post.js
    ├── default-page.js
    ├── index-page.js
    ├── recommendations.js
    └── tags.js
```

## コンテンツの修正

src/pages のマークダウンファイルを編集してください．

## コンテンツの削除

src/pages のマークダウンファイルを削除してください．

## コンテンツの追加

src/pages に新しいマークダウンファイルを追加してください．
マークダウンファイルは，同じディレクトリにあるファイルをコピーし，ファイル名を変更して作成するのが早いです．
このとき，マークダウンファイルに記載のフォーマットは変更しないようにしてください．
特に上段の Frontmatter の項目は src/templates/\*.js が参照しますので，コロン以降のみ変更するようにしてください．

以下，src/news の 2021-9-1-Be-A-Two-Way-Player.md を例に説明します．

ファイル名がそのまま slug になります．たとえば，この例ですと，

https://www.ieice.org/cs/cs-edit/en/news/2021-9-1-Be-A-Two-Way-Player/

となります．

src/news/2021-9-1-Be-A-Two-Way-Player.md は以下のようになっています．

```
---
templateKey: blog-post
title: Be a two-way player
date: 2021-9-2T07:57:21.383Z
description: "Welcome, ComSoc members!"
featuredpost: true
featuredimage: /img/ComMag-CS.jpg
tags:
  - 2021 Communication Magazine
  - Be a two-way player
---

Do you know that many of the active members of the IEICE Communication Society are two-way players, like Shohei Ohtani?

We are not only members of IEICE but also members of IEEE.
We believe that belonging to both societies allows us to learn the unique essence of each, which is the starting point for originality and excellence in our research.

I know it sounds like a cliché, but diversity is the key to outstanding results.

.....

```

ここで，`templateKey: blog-post` は変更してはいけません．
この templateKey は src/pages 以下のディレクトリでそれぞれ指定され，指定されたテンプレート(src/pages/templates/blog-post.js)を利用して表示用ファイルが生成されます．
News の場合は templateKey を blog-post と指定しています．なお，awards の場合は awards-page と指定します．

`title` はタイトルですので，適宜修正してください．

`description` は概要ですので，適宜修正してください．

`featuredpost: true` はそのまま変更しなくて結構です．

`featuredimage` はアイキャッチ画像になります．ディフォルト画像は static/img/ にある画像です．
アップロードして利用したい場合には static/img/ におき，/img/ファイル名 で指定してください．
たとえば，static/img/cs-edit-green.jpg を指定する場合は `featuredimage: /img/cs-edit-green.jpg` となります．

`date` は掲載日ですので，適宜修正してください．

`tags` はタグになります．タグは上に記載のように「-」で一行にひとつ書いてください．

ここまでが，Frontmatter です．
「---」以降が本文になり，マークダウン形式で記載してください．

この例ですと

```
Do you know that many of the active members of the IEICE Communication Society are two-way players, like Shohei Ohtani?

We are not only members of IEICE but also members of IEEE.
We believe that belonging to both societies allows us to learn the unique essence of each, which is the starting point for originality and excellence in our research.

I know it sounds like a cliché, but diversity is the key to outstanding results.
．．．
```

が本文になり，マークダウン形式で記載されています．

# Github でのデータの追加・修正・削除

このサイトは Github Actions を設定してあります．
Github の main branch に push すると自動でスクリプトが走り，公開ファイルを転送します．

従って，データ修正は main branch では行わず，branch をきってからデータ修正を行ってください．
データ修正後は `gatsby develop` で問題無いことを確認の上，pull request を行い，main branch へマージしてください．

面倒ですが，main branch とは異なる branch で作業することで，思わぬミスを防ぐことができますので安全です．

# Netlify CMS でのデータの追加・修正・削除

データの追加・修正・削除は [Netlify CMS](https://ieice-cs-edit.netlify.app/admin/#/collections/news)でもできます。

Netlify CMS へアクセスすると以下のように表示されます。
コンテンツの追加・修正・削除はここから行ってください。

<img width="1090" alt="スクリーンショット 2021-11-11 15 30 11" src="https://user-images.githubusercontent.com/12372151/141249433-3147432a-d02f-4a12-891a-793b7e69a2b5.png">

画像は上の「Media」ボタンを押下することで追加・修正・削除ができます。

<img width="1072" alt="スクリーンショット 2021-11-11 15 34 22" src="https://user-images.githubusercontent.com/12372151/141249562-e72145dd-f3ab-4e28-88af-b8737c1a6a3e.png">
