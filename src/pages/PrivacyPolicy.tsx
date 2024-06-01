function Privacy() {
  return (
    <div className="mx-16 flex flex-col gap-6 py-16 text-neutral-800">
      <h1 className="border-b pb-7 text-6xl font-medium">Privacy Policy</h1>
      <article className="flex flex-col gap-3 pt-6 text-xl">
        <em>最終更新日: 2022, 05, 21</em>
        <p>
          このポリシーは、収集する情報、利用方法、およびその情報に関する選択肢を理解しやすくするために、できるだけシンプルで法的な表現を避けています。このポリシー全体をお読みください。ここでは、重要なポイントを簡単にまとめています。
        </p>
      </article>
      <ol className="flex flex-col gap-9 divide-y px-6">
        <li className="pt-12">
          <article className="flex flex-col">
            <h4 className="text-2xl font-medium">1.個人データの販売について</h4>
            <p className="text-lg">
              私たちはあなたの個人データを誰にも販売しません。これまで一度もありませんし、これからもありません。
            </p>
          </article>
        </li>
        <li className="pt-9">
          <article className="flex flex-col">
            <h4 className="text-2xl font-medium">2.情報の収集</h4>
            <p className="text-lg">
              私たちが知っているのは、あなたがアプリを訪れて利用する際に共有する情報だけです。第三者からあなたの個人情報を収集することはありませんので、何を共有するかは完全にあなた次第です。例えば、仮名を使ってアプリを利用することもできます。
            </p>
          </article>
        </li>
        <li className="pt-9">
          <article className="flex flex-col">
            <h4 className="text-2xl font-medium">3.自動データ収集</h4>
            <p className="text-lg">
              ログインしていなくても、アプリを利用する際に、使用しているデバイスの種類やIPアドレスなどの情報を受け取ります。アカウントを作成することで追加情報を共有することもできます。これらの情報は、サービスの改善やアプリの機能とセキュリティの維持に使用されます。
            </p>
          </article>
        </li>
        <li className="pt-9">
          <article className="flex flex-col">
            <h4 className="text-2xl font-medium">4.ユーザーの選択と管理</h4>
            <p className="text-lg">
              ニュースレターの購読を選択したり、アカウント情報を更新したり、アカウントを完全に削除することができます。また、提出した情報のコピーを要求することも可能です。
            </p>
          </article>
        </li>
        <li className="pt-9">
          <article className="flex flex-col">
            <h4 className="text-2xl font-medium">5.調査やテストデータの利用</h4>
            <p className="text-lg">
              調査やテスト、その他のツールの回答を使用して、あなたに関連するコンテンツを決定し、性格特性の理解を深めます。どの調査を受けるか、どのツールを探索するかは完全に自由です。
            </p>
          </article>
        </li>
        <li className="pt-9">
          <article className="flex flex-col">
            <h4 className="text-2xl font-medium">6.データのセキュリティ</h4>
            <p className="text-lg">
              パスワードやその他のログイン情報を機密に保つ責任はあなたにあります。このような情報を誰かと共有しないでください。共有すると、アプリ上のすべての情報に完全にアクセスできるようになります。
            </p>
          </article>
        </li>
        <li className="pt-9">
          <article className="flex flex-col">
            <h4 className="text-2xl font-medium">7.外部リンク</h4>
            <p className="text-lg">
              アプリには他のウェブサイトへのリンクが含まれる場合があります。それらのウェブサイトのプライバシーポリシーや慣行については責任を負いません。
            </p>
          </article>
        </li>
        <li className="pt-9">
          <article className="flex flex-col">
            <h4 className="text-2xl font-medium">8.ポリシーの更新</h4>
            <p className="text-lg">
              このプライバシーポリシーを随時更新することがあります。新しいバージョンをアプリに掲載しますので、変更内容を確認するために定期的にこのページをチェックしてください。
            </p>
          </article>
        </li>
        <li className="pt-9">
          <article className="flex flex-col">
            <h4 className="text-2xl font-medium">9.お問い合わせ</h4>
            <p className="text-lg">
              このポリシーに関する質問やコメントがありましたら、お気軽にお問い合わせください。
            </p>
          </article>
        </li>
      </ol>
    </div>
  );
}

export default Privacy;
