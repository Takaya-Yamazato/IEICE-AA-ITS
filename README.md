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
% cd IEICE-AA-ITS/
% ls
CODE_OF_CONDUCT.md       PULL_REQUEST_TEMPLATE.md gatsby-config.js         node_modules             public
CONTRIBUTING.md          README.md                gatsby-node.js           package-lock.json        src
LICENSE                  _headers                 lambda                   package.json             static
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
├── node_modules
├── package-lock.json
├── package.json
├── public
├── src
└── static

6 directories, 10 files

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

`npm` で環境構築を行います。

```
% npm install
```

`yarn install` でも OK ですが、gatsbyは`npm`を推奨しています．
なお、`yarn`と`npm`を混在して使うと誤動作する場合がありますので、やめましょう。

## ビルド (build)

ビルドとは、サイトを公開するための html, Javascript や CSS ファイルを作成することを言います。
ビルドが通れば Warning が出ても問題ありません。

ビルドは以下のコマンドで実行できます。

```
% gatsby clean && gatsby build
(npm run clean; npm run build でもOK)
```

最初の `gatsby clean` はキャッシュや不要ファイルを削除するコマンドです。
`npm run clean, npm run build` は `package.json`で定義されています。

## ディベロプ (develop)

ディベロプとは、公開前の一次チェックをするために html, Javascript や CSS ファイルを作成することを言います。

```
% gatsby clean && gatsby develop
(npm run clean; npm run develop でもOK)
```

http://localhost:8000/ で見ることができます．

## 公開

Github Actions を設定してありますので，github の main branch に push すると自動でスクリプトが走り，公開ファイルを転送します．
Github Actions の設定ファイルは `.github/workflows/manual.yml` です．

# コンテンツの追加，修正，削除

コンテンツデータは，src/pages に入っているマークダウンファイルです．

```
% cd src/pages 
% tree
├── 404.js
├── about
│   └── index.md
├── committee
│   └── index.md
├── contact
│   └── index.js
├── contribution
│   └── index.md
├── index-login.txt
├── index.md
├── index_20240928.txt
├── news
│   ├── 20240912-Establishment-of-AA-ITS-has-been-approved.md
│   ├── 20240930-1st-AA-ITS-Workshop.md
│   └── index.js
└── tags
    └── index.js

7 directories, 12 files

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

以下，src/news の 20240930-1st-AA-ITS-Workshop.md を例に説明します．

ファイル名がそのまま slug になります．たとえば，この例ですと，

https://www.ieice.org/cs/aa-its/news/20240930-1st-AA-ITS-Workshop/

となります．

src/news/20240930-1st-AA-ITS-Workshop.md は以下のようになっています．

```
---
templateKey: blog-post
title: 第1回研究会をcore塩尻で開催します
date: 2024-09-30T09:00:10.000Z
description: 2024年1２月5日(木) 13:30 ～6日(金) 13:00に長野研塩尻市にて　AA-ITS ワークショップ（第１回研究会）を開催します．
featuredpost: true
featuredimage: /img/AA-ITS-small.webp
tags:
  - AA-ITS Workshop
  - 第１回研究会
---

-  車載ICTとAD/ADAS-ITSインフラを核とする地域ICTプラットフォーム 第1回研究会　の開催案内
- 1st Workshop on In-vehicle ICT and AD/ADAS-ITS Infrastructure for Regional ICT Platforms (AA-ITS Workshop)

実行委員長：　山里敬也　（名古屋大学）

# 研究会の背景

ITSスマートポールに代表される日本発の画期的な交通安全システム：AD/ADAS-ITSが、実用化一歩手前に来ています。このシステムは、交差点を見通せる場所にカメラやセンサなどを設置して車や自転車・歩行者に危険を知らせることによって、見通しの悪い交差点での事故を無くすことが期待されています。インフラ協調型のレベル４自動運転を実用化するためにもこのシステムに大きな期待がかかっていて、既に2010年代末から自治体主導で複数の地域でタクシーや地域バスを用いた実証実験が重ねられています。
このAD/ADAS-ITSで２次的に得られる交差点や道路などの交通流量情報は、災害時の交通状況の把握や救急車・消防車など優先自動車の為の交通制御、更には住民や観光客の避難誘導にも有効であることから、自治体の消防局や関係部署で交通流量情報の活用や交通流量制御に向けた実証試験が2022年頃から行われ始めています。

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
-  車載ICTとAD/ADAS-ITSインフラを核とする地域ICTプラットフォーム 第1回研究会　の開催案内
- 1st Workshop on In-vehicle ICT and AD/ADAS-ITS Infrastructure for Regional ICT Platforms (AA-ITS Workshop)

実行委員長：　山里敬也　（名古屋大学）

# 研究会の背景

ITSスマートポールに代表される日本発の画期的な交通安全システム：AD/ADAS-ITSが、実用化一歩手前に来ています。このシステムは、交差点を見通せる場所にカメラやセンサなどを設置して車や自転車・歩行者に危険を知らせることによって、見通しの悪い交差点での事故を無くすことが期待されています。インフラ協調型のレベル４自動運転を実用化するためにもこのシステムに大きな期待がかかっていて、既に2010年代末から自治体主導で複数の地域でタクシーや地域バスを用いた実証実験が重ねられています。
このAD/ADAS-ITSで２次的に得られる交差点や道路などの交通流量情報は、災害時の交通状況の把握や救急車・消防車など優先自動車の為の交通制御、更には住民や観光客の避難誘導にも有効であることから、自治体の消防局や関係部署で交通流量情報の活用や交通流量制御に向けた実証試験が2022年頃から行われ始めています。

.....
```

が本文になり，マークダウン形式で記載されています．

# Github でのデータの追加・修正・削除

このサイトは Github Actions を設定してあります．
Github の main branch に push すると自動でスクリプトが走り，公開ファイルを転送します．

従って，データ修正は main branch では行わず，branch をきってからデータ修正を行ってください．
データ修正後は `gatsby develop` で問題無いことを確認の上，pull request を行い，main branch へマージしてください．

面倒ですが，main branch とは異なる branch で作業することで，思わぬミスを防ぐことができますので安全です．

