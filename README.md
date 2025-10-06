# gatsby-web
gatsby 静的ジェネレーター 


```bash
echo 'https://zenn.dev/driller/articles/2a23ef94f1d603 上記の記事を理解して、今作っているリポジトリに対しても同じファイル構成で作って。' | claude
```


```bash

Claude Code知識管理システムの具体的な使い方を説明します。

  日常的な使い方

  1. 開発開始時

  新しいセッションを始める時は /init コマンドでコンテキストをリセット：
  /init

  2. 機能開発中

  例：新しいブログ機能を追加する場合

  開発前
  - common-patterns.md でよく使うパターンを確認

  開発中に問題発生
  - debug-log.md に記録：
  ### 2025-10-06: GraphQLクエリでundefinedエラー

  **問題**
  - ブログ記事一覧ページでデータが取得できない

  **原因**
  - GraphQLクエリのフィールド名が間違っていた（`titel` → `title`）

  **解決策**
  - クエリを修正

  **学び**
  - GraphQL Playgroundで事前にクエリを確認すべき

  **関連ファイル**
  - `src/pages/blog.tsx:25`

  3. 機能完成後

  以下のファイルを更新：

  project-knowledge.md
  ## Gatsby関連

  ### GraphQLクエリパターン
  - ブログ記事一覧取得：
  ```graphql
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
  }

  project-improvements.md
  ### 2025-10-06: ブログ機能追加

  **実施内容**
  - Markdown形式のブログ記事対応
  - 記事一覧ページと詳細ページの実装

  **学び**
  - gatsby-transformer-remarkプラグインが便利
  - GraphQLスキーマは事前確認が重要

  **改善案**
  - 記事の検索機能を追加したい

  4. 月次整理

  月末に各ファイルを見直して：
  - 古い情報を削除
  - よく使うパターンを common-patterns.md に追加
  - 解決済みデバッグログを .claude/debug/archive/ に移動

  実践例

  シナリオ：画像最適化を実装する

  1. 調査 → project-knowledge.md を確認
  2. 実装 → 問題があれば debug-log.md に記録
  3. 完了 → project-knowledge.md と project-improvements.md を更新
  4. 次回 → /init で過去の知見を活用して効率的に開発

  この繰り返しでプロジェクトの知識が蓄積され、開発スピードが向上します。
```
