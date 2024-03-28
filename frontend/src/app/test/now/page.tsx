// ⚠ これを設定しなかった場合、ずっとビルドを走らせた時刻が表示される。
export const dynamic = "force-dynamic";

const format = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    timeStyle: "full",
});

export default function Page() {
    // 現在時刻の取得 (fetch 以外のデータ取得の例)
    const now = new Date();

    return (
        <div>
            <div>Now: </div>
            <div>{format.format(now)}</div>
        </div>
    );
}