const products = [
  {
    id: 1,
    name: "گوشی سامسونگ Galaxy A15",
    category: "موبایل و تبلت",
    price: "۱۲٬۵۰۰",
    icon: "📱",
    location: "کابل",
  },
  {
    id: 2,
    name: "لپ‌تاپ Lenovo",
    category: "لپ‌تاپ و کامپیوتر",
    price: "۲۸٬۰۰۰",
    icon: "💻",
    location: "هرات",
  },
  {
    id: 3,
    name: "ساعت مچی مردانه",
    category: "پوشاک و مد",
    price: "۱٬۲۰۰",
    icon: "⌚",
    location: "مزار شریف",
  },
  {
    id: 4,
    name: "هدفون بی‌سیم",
    category: "موبایل و تبلت",
    price: "۱٬۸۰۰",
    icon: "🎧",
    location: "کابل",
  },
  {
    id: 5,
    name: "کفش ورزشی",
    category: "ورزش و سرگرمی",
    price: "۲٬۰۰۰",
    icon: "👟",
    location: "قندهار",
  },
  {
    id: 6,
    name: "چراغ مطالعه",
    category: "خانه و آشپزخانه",
    price: "۷۰۰",
    icon: "💡",
    location: "بلخ",
  },
];

const categories = [
  "همه محصولات",
  "موبایل و تبلت",
  "لپ‌تاپ و کامپیوتر",
  "پوشاک و مد",
  "خانه و آشپزخانه",
  "ورزش و سرگرمی",
];

export default function ProductsPage() {
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
          <a href="/" style={{
            color: "#126b45",
            fontSize: "24px",
            fontWeight: "bold",
          }}>
            افغان مارکت 🇦🇫
          </a>

          <nav style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}>
            <a href="/">خانه</a>
            <a href="/products" style={{ color: "#126b45" }}>
              محصولات
            </a>
            <a href="/sellers">فروشندگان</a>
            <a href="/account">حساب من</a>
          </nav>
        </div>
      </header>

      <section style={{
        background: "linear-gradient(120deg, #0b5033, #168456)",
        color: "white",
        padding: "45px 20px",
        textAlign: "center",
      }}>
        <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>
          محصولات افغان مارکت
        </h1>

        <p style={{ fontSize: "16px" }}>
          محصولات مورد نیازت را از فروشندگان سراسر افغانستان پیدا کن.
        </p>
      </section>

      <section style={{
        maxWidth: "1200px",
        margin: "35px auto",
        padding: "0 20px",
      }}>
        <h2 style={{ fontSize: "23px", marginBottom: "20px" }}>
          دسته‌بندی محصولات
        </h2>

        <div style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "35px",
        }}>
          {categories.map((category, index) => (
            <span key={category} style={{
              background: index === 0 ? "#126b45" : "#ffffff",
              color: index === 0 ? "#ffffff" : "#172033",
              border: "1px solid #e5e9ef",
              padding: "10px 16px",
              borderRadius: "25px",
              fontSize: "14px",
            }}>
              {category}
            </span>
          ))}
        </div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px",
        }}>
          <h2 style={{ fontSize: "23px" }}>
            همه محصولات
          </h2>

          <span style={{ color: "#687386" }}>
            {products.length} محصول نمونه
          </span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "18px",
        }}>
          {products.map((product) => (
            <article key={product.id} style={{
              background: "#ffffff",
              border: "1px solid #e5e9ef",
              borderRadius: "14px",
              overflow: "hidden",
            }}>
              <div style={{
                height: "155px",
                background: "#eef4f0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "65px",
              }}>
                {product.icon}
              </div>

              <div style={{ padding: "17px" }}>
                <span style={{
                  color: "#126b45",
                  fontSize: "12px",
                }}>
                  {product.category}
                </span>

                <h3 style={{
                  fontSize: "17px",
                  margin: "10px 0",
                }}>
                  {product.name}
                </h3>

                <p style={{
                  color: "#687386",
                  fontSize: "13px",
                  marginBottom: "12px",
                }}>
                  📍 {product.location}
                </p>

                <div style={{
                  borderTop: "1px solid #e5e9ef",
                  paddingTop: "13px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "8px",
                }}>
                  <strong style={{
                    color: "#126b45",
                    fontSize: "17px",
                  }}>
                    {product.price} افغانی
                  </strong>

                  <span style={{
                    background: "#f4a62a",
                    color: "#172033",
                    padding: "7px 12px",
                    borderRadius: "7px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}>
                    نمونه
                  </span>
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
        <h2>افغان مارکت 🇦🇫</h2>
        <p style={{ marginTop: "10px", color: "#cbd5e1" }}>
          بازار آنلاین افغانستان؛ یک بازار برای همه.
        </p>
        <p style={{ marginTop: "15px", color: "#cbd5e1" }}>
          © 2026 Afghan Market. All rights reserved.
        </p>
      </footer>
    </main>
  );
          }
