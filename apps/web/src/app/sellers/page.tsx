import Link from "next/link";

const sellers = [
  {
    id: 1,
    name: "فروشگاه آریانا",
    category: "موبایل و تکنولوژی",
    location: "کابل",
    icon: "📱",
    description: "عرضه‌کننده موبایل و لوازم جانبی",
  },
  {
    id: 2,
    name: "بازار مد نوین",
    category: "لباس و پوشاک",
    location: "هرات",
    icon: "👕",
    description: "انواع لباس و پوشاک مردانه و زنانه",
  },
  {
    id: 3,
    name: "خانه هوشمند",
    category: "خانه و آشپزخانه",
    location: "مزار شریف",
    icon: "🏠",
    description: "لوازم خانه و وسایل آشپزخانه",
  },
  {
    id: 4,
    name: "فروشگاه ورزشی قهرمان",
    category: "ورزش و سرگرمی",
    location: "قندهار",
    icon: "⚽",
    description: "لوازم ورزشی و تجهیزات تمرین",
  },
  {
    id: 5,
    name: "تکنولوژی شرق",
    category: "لپ‌تاپ و کامپیوتر",
    location: "جلال‌آباد",
    icon: "💻",
    description: "لپ‌تاپ و تجهیزات کامپیوتری",
  },
  {
    id: 6,
    name: "بازار زیبایی",
    category: "زیبایی و سلامت",
    location: "کندز",
    icon: "✨",
    description: "محصولات زیبایی و مراقبت شخصی",
  },
];

export default function SellersPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#f7f8fa",
      color: "#172033",
    }}>
      <header style={{
        background: "#ffffff",
        borderBottom: "1px solid #e5e9ef",
        padding: "18px 5%",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}>
          <Link href="/" style={{
            color: "#126b45",
            fontSize: "24px",
            fontWeight: "bold",
          }}>
            QAVENTRIX MARKET 🇦🇫
          </Link>

          <nav style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}>
            <Link href="/">خانه</Link>
            <a href="/products">محصولات</a>
            <a href="/sellers" style={{ color: "#126b45" }}>
              فروشندگان
            </a>
            <a href="/account">حساب من</a>
          </nav>
        </div>
      </header>

      <section style={{
        background: "linear-gradient(120deg, #0b5033, #168456)",
        color: "#ffffff",
        textAlign: "center",
        padding: "55px 20px",
      }}>
        <h1 style={{
          fontSize: "32px",
          marginBottom: "15px",
        }}>
          فروشندگان QAVENTRIX MARKET
        </h1>

        <p style={{
          fontSize: "17px",
          lineHeight: 2,
        }}>
          فروشگاه‌های مختلف از سراسر افغانستان را در یک بازار پیدا کن.
        </p>
      </section>

      <section style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "0 20px",
      }}>
        <div style={{
          background: "#ffffff",
          padding: "25px",
          borderRadius: "14px",
          border: "1px solid #e5e9ef",
          marginBottom: "30px",
          textAlign: "center",
        }}>
          <h2 style={{
            fontSize: "23px",
            marginBottom: "10px",
          }}>
            یک بازار، هزاران فرصت
          </h2>

          <p style={{
            color: "#687386",
            lineHeight: 2,
          }}>
            QAVENTRIX MARKET فرصتی برای معرفی فروشگاه‌ها و رشد کسب‌وکارهای
            کوچک و بزرگ افغانستان فراهم می‌کند.
          </p>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "22px",
        }}>
          <h2 style={{ fontSize: "24px" }}>
            فروشگاه‌ها
          </h2>

          <span style={{
            color: "#687386",
            fontSize: "14px",
          }}>
            {sellers.length} فروشگاه نمونه
          </span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
        }}>
          {sellers.map((seller) => (
            <article key={seller.id} style={{
              background: "#ffffff",
              border: "1px solid #e5e9ef",
              borderRadius: "14px",
              overflow: "hidden",
            }}>
              <div style={{
                height: "145px",
                background: "#eef4f0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "60px",
              }}>
                {seller.icon}
              </div>

              <div style={{ padding: "20px" }}>
                <h3 style={{
                  fontSize: "19px",
                  marginBottom: "10px",
                }}>
                  {seller.name}
                </h3>

                <p style={{
                  color: "#126b45",
                  fontSize: "14px",
                  marginBottom: "10px",
                }}>
                  {seller.category}
                </p>

                <p style={{
                  color: "#687386",
                  fontSize: "14px",
                  marginBottom: "10px",
                }}>
                  📍 {seller.location}
                </p>

                <p style={{
                  color: "#687386",
                  fontSize: "14px",
                  lineHeight: 1.9,
                  marginBottom: "17px",
                }}>
                  {seller.description}
                </p>

                <div style={{
                  background: "#fff5df",
                  color: "#8a5b0b",
                  textAlign: "center",
                  padding: "9px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: "bold",
                }}>
                  فروشگاه نمونه
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer style={{
        background: "#172033",
        color: "#ffffff",
        textAlign: "center",
        padding: "28px 15px",
        marginTop: "45px",
      }}>
        <h2>QAVENTRIX MARKET 🇦🇫</h2>

        <p style={{
          marginTop: "10px",
          color: "#cbd5e1",
        }}>
          بازار آنلاین افغانستان؛ یک بازار برای همه.
        </p>

        <p style={{
          marginTop: "15px",
          color: "#cbd5e1",
        }}>
          © 2026 QAVENTRIX MARKET. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
