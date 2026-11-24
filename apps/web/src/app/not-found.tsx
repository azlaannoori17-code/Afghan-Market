import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container" style={{ padding: "100px 20px", textAlign: "center" }}>
      <div style={{ fontSize: "72px", fontWeight: 800, color: "#126b45" }}>
        404
      </div>

      <h1>صفحه مورد نظر پیدا نشد!</h1>

      <p style={{ margin: "16px 0 28px", color: "#687386" }}>
        متأسفیم، صفحه‌ای که دنبال آن هستید وجود ندارد یا منتقل شده است.
      </p>

      <Link href="/" className="button-primary">
        بازگشت به صفحه اصلی
      </Link>
    </main>
  );
}
