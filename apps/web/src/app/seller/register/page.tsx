import Link from "next/link";

const provinces = [
  "کابل", "هرات", "بلخ", "قندهار", "ننگرهار", "کندز",
  "بغلان", "فاریاب", "غزنی", "پروان", "بدخشان", "تخار",
  "سمنگان", "جوزجان", "سرپل", "فراه", "نیمروز", "هلمند",
  "ارزگان", "زابل", "پکتیا", "پکتیکا", "خوست", "لوگر",
  "میدان وردک", "کاپیسا", "پنجشیر", "لغمان", "کنر",
  "نورستان", "بامیان", "دایکندی", "غور", "بادغیس",
];

const categories = [
  "موبایل و تکنولوژی",
  "لپ‌تاپ و کامپیوتر",
  "لباس و پوشاک",
  "خانه و آشپزخانه",
  "مواد غذایی",
  "زیبایی و سلامت",
  "ورزش و سرگرمی",
  "کفش و کیف",
  "ابزار و تجهیزات",
  "سایر موارد",
];

const inputStyle = {
  width: "100%",
  padding: "13px",
  border: "1px solid #dce2e9",
  borderRadius: "8px",
  background: "#ffffff",
  color: "#172033",
  marginTop: "8px",
};

const labelStyle = {
  display: "block",
  fontWeight: "bold" as const,
  marginBottom: "18px",
};

export default function SellerRegisterPage() {
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
            افغان مارکت 🇦🇫
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
          ثبت‌نام فروشنده در افغان مارکت
        </h1>

        <p style={{
          fontSize: "16px",
          lineHeight: 2,
        }}>
          فروشگاه خود را به بازار آنلاین افغانستان معرفی کن.
        </p>
      </section>

      <section style={{
        maxWidth: "850px",
        margin: "40px auto",
        padding: "0 20px",
      }}>
        <div style={{
          background: "#ffffff",
          padding: "28px",
          borderRadius: "14px",
          border: "1px solid #e5e9ef",
        }}>
          <h2 style={{
            fontSize: "24px",
            marginBottom: "10px",
          }}>
            اطلاعات فروشنده و فروشگاه
          </h2>

          <p style={{
            color: "#687386",
            lineHeight: 2,
            marginBottom: "28px",
          }}>
            لطفاً اطلاعات زیر را با دقت وارد کن.
            فیلدهای دارای علامت * ضروری هستند.
          </p>

          <form>
            <h3 style={{
              color: "#126b45",
              marginBottom: "20px",
              fontSize: "19px",
            }}>
              اطلاعات شخصی
            </h3>

            <label style={labelStyle}>
              نام کامل فروشنده *
              <input
                type="text"
                name="fullName"
                placeholder="نام و نام خانوادگی"
                required
                style={inputStyle}
              />
            </label>

            <label style={labelStyle}>
              شماره تماس *
              <input
                type="tel"
                name="phone"
                placeholder="شماره تماس فعال"
                required
                style={inputStyle}
              />
            </label>

            <label style={labelStyle}>
              آدرس ایمیل
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                style={inputStyle}
              />
            </label>

            <hr style={{
              border: "none",
              borderTop: "1px solid #e5e9ef",
              margin: "28px 0",
            }} />

            <h3 style={{
              color: "#126b45",
              marginBottom: "20px",
              fontSize: "19px",
            }}>
              اطلاعات فروشگاه
            </h3>

            <label style={labelStyle}>
              نام فروشگاه *
              <input
                type="text"
                name="storeName"
                placeholder="نام فروشگاه خود را وارد کن"
                required
                style={inputStyle}
              />
            </label>

            <label style={labelStyle}>
              دسته‌بندی فعالیت *
              <select
                name="category"
                required
                defaultValue=""
                style={inputStyle}
              >
                <option value="" disabled>
                  دسته‌بندی فروشگاه را انتخاب کن
                </option>

                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label style={labelStyle}>
              ولایت *
              <select
                name="province"
                required
                defaultValue=""
                style={inputStyle}
              >
                <option value="" disabled>
                  ولایت خود را انتخاب کن
                </option>

                {provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </label>

            <label style={labelStyle}>
              شهر یا ناحیه *
              <input
                type="text"
                name="city"
                placeholder="نام شهر یا ناحیه"
                required
                style={inputStyle}
              />
            </label>

            <label style={labelStyle}>
              نشانی فروشگاه
              <textarea
                name="address"
                rows={3}
                placeholder="نشانی دقیق فروشگاه"
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
              />
            </label>

            <label style={labelStyle}>
              توضیحات فروشگاه
              <textarea
                name="description"
                rows={4}
                placeholder="درباره فروشگاه و محصولات خود توضیح بده"
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
              />
            </label>

            <div style={{
              background: "#fff5df",
              border: "1px solid #f4d99e",
              padding: "16px",
              borderRadius: "9px",
              marginBottom: "22px",
              color: "#75500d",
              lineHeight: 2,
              fontSize: "14px",
            }}>
              توجه: پس از اتصال سیستم ثبت‌نام واقعی،
              اطلاعات فروشگاه برای بررسی و تأیید مدیریت
              افغان مارکت ارسال خواهد شد.
            </div>

            <button
              type="button"
              style={{
                width: "100%",
                background: "#126b45",
                color: "#ffffff",
                border: "none",
                borderRadius: "9px",
                padding: "15px",
                fontWeight: "bold",
                fontSize: "17px",
                cursor: "pointer",
              }}
            >
              ثبت اطلاعات فروشگاه
            </button>
          </form>
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
