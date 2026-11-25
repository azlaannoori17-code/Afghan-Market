import Link from "next/link";

const categories = [
  "موبایل و تبلت",
  "لپ‌تاپ و کامپیوتر",
  "پوشاک و مد",
  "خانه و آشپزخانه",
  "زیبایی و سلامت",
  "مواد غذایی",
  "ورزش و سرگرمی",
  "کتاب و لوازم‌التحریر",
];

const features = [
  {
    title: "فروشندگان سراسر افغانستان",
    description: "فروشگاه‌های مختلف از تمام ولایت‌های کشور در یک بازار.",
  },
  {
    title: "خرید آسان و سریع",
    description: "محصولات مورد نیازت را به‌آسانی پیدا و بررسی کن.",
  },
  {
    title: "بازار برای همه",
    description: "فرصتی برای رشد کسب‌وکارهای کوچک و بزرگ افغانستان.",
  },
];

export default function HomePage() {
  return (
    <main>
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          padding: "18px 5%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <h1 style={{ color: "#126b45", fontSize: "27px" }}>
            QAVENTRIX
          </h1>

          <nav style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <Link href="/" style={{ color: "#172033" }}>
              خانه
            </Link>
            <a href="/products" style={{ color: "#172033" }}>
              محصولات
            </a>
            <a href="/sellers" style={{ color: "#172033" }}>
              فروشندگان
            </a>
            <a href="/account" style={{ color: "#172033" }}>
              حساب من
            </a>
          </nav>
        </div>
      </header>

      <section
        style={{
          background: "linear-gradient(120deg, #0b5033, #168456)",
          color: "white",
          padding: "75px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "850px", margin: "auto" }}>
          <h2 style={{ fontSize: "38px", marginBottom: "20px" }}>
            بازار آنلاین QAVENTRIX
          </h2>

          <p style={{ fontSize: "18px", lineHeight: 2 }}>
            خرید آسان، فروش هوشمند و ارتباط میان فروشندگان و خریداران
            در سراسر افغانستان.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            <a
              href="/products"
              style={{
                background: "#f4a62a",
                color: "#172033",
                padding: "14px 28px",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              مشاهده محصولات
            </a>

            <a
              href="/seller/register"
              style={{
                background: "white",
                color: "#126b45",
                padding: "14px 28px",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              ثبت‌نام فروشنده
            </a>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "45px auto",
          padding: "0 20px",
        }}
      >
        <h2 style={{ fontSize: "26px", marginBottom: "25px" }}>
          دسته‌بندی محصولات
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "15px",
          }}
        >
          {categories.map((category) => (
            <a
              key={category}
              href="/products"
              style={{
                background: "white",
                padding: "25px 12px",
                textAlign: "center",
                borderRadius: "12px",
                border: "1px solid #e5e9ef",
                color: "#172033",
                fontWeight: "bold",
              }}
            >
              {category}
            </a>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "#ffffff",
          padding: "45px 20px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          <h2 style={{ fontSize: "26px", marginBottom: "25px" }}>
            چرا QAVENTRIX؟
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {features.map((feature) => (
              <article
                key={feature.title}
                style={{
                  padding: "25px",
                  border: "1px solid #e5e9ef",
                  borderRadius: "12px",
                }}
              >
                <h3 style={{ color: "#126b45", marginBottom: "12px" }}>
                  {feature.title}
                </h3>
                <p style={{ lineHeight: 2, color: "#687386" }}>
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer
        style={{
          background: "#172033",
          color: "white",
          textAlign: "center",
          padding: "30px 15px",
          marginTop: "40px",
        }}
      >
        <h2>QAVENTRIX</h2>
        <p style={{ marginTop: "12px" }}>
          بازار آنلاین افغانستان؛ یک بازار برای همه.
        </p>
        <p style={{ marginTop: "15px", color: "#cbd5e1" }}>
          © 2026 QAVENTRIX. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
