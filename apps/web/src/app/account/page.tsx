export default function AccountPage() {
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
            <a href="/products">محصولات</a>
            <a href="/sellers">فروشندگان</a>
            <a href="/account" style={{ color: "#126b45" }}>
              حساب من
            </a>
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
          حساب کاربری من
        </h1>

        <p style={{ fontSize: "16px" }}>
          به خانوادهٔ بزرگ افغان مارکت خوش آمدی.
        </p>
      </section>

      <section style={{
        maxWidth: "1050px",
        margin: "40px auto",
        padding: "0 20px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "22px",
        }}>

          <div style={{
            background: "#ffffff",
            padding: "28px",
            borderRadius: "14px",
            border: "1px solid #e5e9ef",
          }}>
            <div style={{
              fontSize: "42px",
              marginBottom: "15px",
            }}>
              👤
            </div>

            <h2 style={{
              fontSize: "23px",
              marginBottom: "12px",
            }}>
              ورود به حساب
            </h2>

            <p style={{
              color: "#687386",
              lineHeight: 2,
              marginBottom: "22px",
            }}>
              اگر قبلاً در افغان مارکت حساب ساخته‌ای،
              از این بخش وارد حساب خود شو.
            </p>

            <form>
              <label htmlFor="login-email" style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
              }}>
                ایمیل یا شماره تلفن
              </label>

              <input
                id="login-email"
                type="text"
                placeholder="ایمیل یا شماره تلفن خود را وارد کن"
                style={{
                  width: "100%",
                  padding: "13px",
                  border: "1px solid #dce2e9",
                  borderRadius: "8px",
                  marginBottom: "18px",
                  outlineColor: "#126b45",
                }}
              />

              <label htmlFor="login-password" style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
              }}>
                رمز عبور
              </label>

              <input
                id="login-password"
                type="password"
                placeholder="رمز عبور خود را وارد کن"
                style={{
                  width: "100%",
                  padding: "13px",
                  border: "1px solid #dce2e9",
                  borderRadius: "8px",
                  marginBottom: "18px",
                }}
              />

              <button type="button" style={{
                width: "100%",
                background: "#126b45",
                color: "#ffffff",
                border: "none",
                borderRadius: "8px",
                padding: "13px",
                fontWeight: "bold",
                fontSize: "16px",
              }}>
                ورود به حساب
              </button>

              <p style={{
                textAlign: "center",
                marginTop: "18px",
                color: "#126b45",
                fontSize: "14px",
              }}>
                فراموشی رمز عبور؟
              </p>
            </form>
          </div>

          <div style={{
            background: "#ffffff",
            padding: "28px",
            borderRadius: "14px",
            border: "1px solid #e5e9ef",
          }}>
            <div style={{
              fontSize: "42px",
              marginBottom: "15px",
            }}>
              ✨
            </div>

            <h2 style={{
              fontSize: "23px",
              marginBottom: "12px",
            }}>
              ایجاد حساب جدید
            </h2>

            <p style={{
              color: "#687386",
              lineHeight: 2,
              marginBottom: "22px",
            }}>
              به افغان مارکت بپیوند و خرید آسان را از
              فروشندگان سراسر افغانستان تجربه کن.
            </p>

            <form>
              <label htmlFor="register-name" style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
              }}>
                نام کامل
              </label>

              <input
                id="register-name"
                type="text"
                placeholder="نام و نام خانوادگی"
                style={{
                  width: "100%",
                  padding: "13px",
                  border: "1px solid #dce2e9",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              />

              <label htmlFor="register-email" style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
              }}>
                ایمیل یا شماره تلفن
              </label>

              <input
                id="register-email"
                type="text"
                placeholder="ایمیل یا شماره تلفن"
                style={{
                  width: "100%",
                  padding: "13px",
                  border: "1px solid #dce2e9",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              />

              <label htmlFor="register-password" style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
              }}>
                رمز عبور
              </label>

              <input
                id="register-password"
                type="password"
                placeholder="یک رمز عبور انتخاب کن"
                style={{
                  width: "100%",
                  padding: "13px",
                  border: "1px solid #dce2e9",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              />

              <button type="button" style={{
                width: "100%",
                background: "#f4a62a",
                color: "#172033",
                border: "none",
                borderRadius: "8px",
                padding: "13px",
                fontWeight: "bold",
                fontSize: "16px",
              }}>
                ایجاد حساب کاربری
              </button>
            </form>
          </div>

        </div>

        <div style={{
          background: "#ffffff",
          padding: "25px",
          borderRadius: "14px",
          border: "1px solid #e5e9ef",
          marginTop: "25px",
          textAlign: "center",
        }}>
          <div style={{ fontSize: "38px" }}>🏪</div>

          <h2 style={{
            margin: "12px 0",
            fontSize: "22px",
          }}>
            می‌خواهی فروشندهٔ افغان مارکت شوی؟
          </h2>

          <p style={{
            color: "#687386",
            lineHeight: 2,
            marginBottom: "18px",
          }}>
            فروشگاه خود را معرفی کن و محصولاتت را به
            مشتریان سراسر افغانستان عرضه کن.
          </p>

          <a href="/seller/register" style={{
            display: "inline-block",
            background: "#126b45",
            color: "#ffffff",
            padding: "12px 25px",
            borderRadius: "8px",
            fontWeight: "bold",
          }}>
            ثبت‌نام فروشنده
          </a>
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
          © 2026 Afghan Market. All rights reserved.
        </p>
      </footer>
    </main>
  );
      }
