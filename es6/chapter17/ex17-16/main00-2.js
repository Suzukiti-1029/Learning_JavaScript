const html =
  `〇〇<a onclick="alert('!!')" class="cl1" href="/foo" id="id1">XXX</a>△△`;

console.log(html.replace(/<a .*?>(.*?)<\/a>/ig, (match, group1, offset, origin) => {
  console.log(`<a>タグが${offset + 1}文字目から見つかった`);
  console.log(`リンク対象文字列は「${group1}」`);
  console.log(`元々の文字列は[${origin}]`);
  console.log(`マッチしたのは「${match}」`);
}));
