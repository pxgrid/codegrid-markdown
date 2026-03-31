import { spawnSync } from 'node:child_process';
import { describe, it } from 'node:test';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CLI = join(__dirname, '../../bin/cgmd.js');

function runCLI(args) {
  return spawnSync(process.execPath, [CLI, ...args], { encoding: 'utf8', timeout: 10000 });
}

describe('CodeGridMarkdown - CLI', function () {

  describe('引数なし', function () {
    it('エラーで終了すること', function (t) {
      const result = runCLI([]);
      t.assert.strictEqual(result.status, 1);
    });

    it('エラーメッセージが出ること', async (t) => {
      const result = runCLI([]);
      await t.assert.snapshot(result.stderr);
    });
  });

  describe('--help', function () {
    it('ヘルプを出力して終了すること', function (t) {
      const result = runCLI(['--help']);
      t.assert.strictEqual(result.status, 0);
    });

    it('ヘルプテキストが出ること', async (t) => {
      const result = runCLI(['--help']);
      await t.assert.snapshot(result.stdout);
    });
  });

  describe('文字列入力（ファイルが存在しない場合は文字列として扱う）', function () {
    it('MarkdownをHTMLに変換できること', async (t) => {
      const result = runCLI(['# Hello\n\nWorld']);
      t.assert.strictEqual(result.status, 0);
      await t.assert.snapshot(result.stdout);
    });

    it('CGMD構文を含むMarkdownを変換できること', async (t) => {
      const result = runCLI(['[note]\nこれはノートです。\n[/note]']);
      t.assert.strictEqual(result.status, 0);
      await t.assert.snapshot(result.stdout);
    });
  });

  describe('ファイル入力', function () {
    it('example/cg.mdを変換できること', async (t) => {
      const mdFile = join(__dirname, '../../example/cg.md');
      const result = runCLI([mdFile]);
      t.assert.strictEqual(result.status, 0);
      await t.assert.snapshot(result.stdout);
    });
  });

});
