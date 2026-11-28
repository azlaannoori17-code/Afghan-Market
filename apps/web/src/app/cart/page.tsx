import Link from "next/link";

const cartItems = [
  {
    id: 1,
    name: "گوشی سامسونگ Galaxy A15",
    category: "موبایل و تبلت",
    price: 12500,
    quantity: 1,
    icon: "📱",
  },
  {
    id: 2,
    name: "هدفون بی‌سیم",
    category: "موبایل و تبلت",
    price: 1800,
    quantity: 2,
    icon: "🎧",
  },
  {
    id: 3,
    name: "ساعت مچی مردانه",
    category: "پوشاک و مد",
    price: 1200,
    quantity: 1,
    icon: "⌚",
  },
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("fa-AF").format(price);

const subtotal = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

export default function CartPage() {
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
            <a href="/sellers">فروشندگان</a>
            <a href="/account">حساب من</a>
          </nav>
        </div>
      </header>

      <section style={{
        background: "linear-gradient(120deg, #0b5033, #168456)",
        color: "#ffffff",
        textAlign: "center",
        padding: "45px 20px",
      }}>
        <h1 style={{
          fontSize: "32px",
          marginBottom: "12px",
        }}>
          سبد خرید من 🛒
        </h1>

        <p style={{ fontSize: "16px" }}>
          محصولات انتخاب‌شده‌ات را بررسی کن.
        </p>
      </section>

      <section style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "0 20px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
          alignItems: "start",
        }}>
          <div>
            <h2 style={{
              fontSize: "23px",
              marginBottom: "20px",
            }}>
              محصولات انتخاب‌شده
            </h2>

            {cartItems.map((item) => (
              <article key={item.id} style={{
                background: "#ffffff",
                border: "1px solid #e5e9ef",
                borderRadius: "12px",
                padding: "18px",
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                flexWrap: "wrap",
              }}>
                <div style={{
                  width: "85px",
                  height: "85px",
                  background: "#eef4f0",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "42px",
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: "17px",
                    marginBottom: "7px",
                  }}>
                    {item.name}
                  </h3>

                  <p style={{
                    color: "#687386",
                    fontSize: "13px",
                    marginBottom: "7px",
                  }}>
                    {item.category}
                  </p>

                  <p style={{
                    color: "#126b45",
                    fontWeight: "bold",
                  }}>
                    {formatPrice(item.price)} افغانی
                  </p>

                  <p style={{
                    color: "#687386",
                    fontSize: "13px",
                    marginTop: "5px",
                  }}>
                    تعداد: {formatPrice(item.quantity)}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <aside style={{
            background: "#ffffff",
            border: "1px solid #e5e9ef",
            borderRadius: "14px",
            padding: "24px",
          }}>
            <h2 style={{
              fontSize: "22px",
              marginBottom: "22px",
            }}>
              خلاصه سفارش
            </h2>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "17px",
              gap: "10px",
            }}>
              <span style={{ color: "#687386" }}>
                تعداد محصولات:
              </span>

              <strong>
                {formatPrice(cartItems.reduce(
                  (total, item) => total + item.quantity,
                  0
                ))}
              </strong>
            </div>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "17px",
              gap: "10px",
            }}>
              <span style={{ color: "#687386" }}>
                مجموع قیمت:
              </span>

              <strong>
                {formatPrice(subtotal)} افغانی
              </strong>
            </div>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
              gap: "10px",
            }}>
              <span style={{ color: "#687386" }}>
                هزینه ارسال:
              </span>

              <span>هنوز محاسبه نشده</span>
            </div>

            <hr style={{
              border: "none",
              borderTop: "1px solid #e5e9ef",
              marginBottom: "20px",
            }} />

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              marginBottom: "22px",
            }}>
              <strong>مجموع کالاها:</strong>

              <strong style={{
                color: "#126b45",
                fontSize: "19px",
              }}>
                {formatPrice(subtotal)} افغانی
              </strong>
            </div>

            <button type="button" style={{
              width: "100%",
              background: "#126b45",
              color: "#ffffff",
              border: "none",
              borderRadius: "9px",
              padding: "14px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}>
              ادامه برای ثبت سفارش
            </button>

            <a href="/products" style={{
              display: "block",
              textAlign: "center",
              color: "#126b45",
              marginTop: "18px",
              fontWeight: "bold",
            }}>
              ادامه خرید
            </a>

            <p style={{
              color: "#687386",
              fontSize: "12px",
              lineHeight: 1.9,
              marginTop: "20px",
              textAlign: "center",
            }}>
              قیمت‌ها و محصولات این صفحه آزمایشی هستند.
              هزینه ارسال هنوز محاسبه نشده است.
            </p>
          </aside>
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
