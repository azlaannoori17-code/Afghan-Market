const categories = [
  "موبایل و تکنولوژی",
  "لباس و پوشاک",
  "خانه و آشپزخانه",
  "مواد غذایی",
  "زیبایی و سلامت",
  "ورزش و سرگرمی",
  "کفش و کیف",
  "ابزار و تجهیزات",
];

const features = [
  {
    title: "خرید آسان",
    description: "محصولات مورد نیازت را از سراسر افغانستان پیدا کن.",
    icon: "🛍️",
  },
  {
    title: "فروشندگان افغانستان",
    description: "فروشگاه‌های معتبر از تمام ولایت‌ها در یک بازار.",
    icon: "🏪",
  },
  {
    title: "تحویل سفارش",
    description: "سفارش خود را ثبت کن و مراحل تحویل را پیگیری کن.",
    icon: "🚚",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-content">
          <a href="/" className="brand">
            <span className="brand-mark">A</span>
            <span>
              <strong>افغان مارکت</strong>
              <small>AFGHAN MARKET</small>
            </span>
          </a>

          <form className="search-box" action="/search">
            <input
              type="search"
              name="q"
              placeholder="چه چیزی جست‌وجو می‌کنید؟"
              aria-label="جست‌وجوی محصولات"
            />
            <button type="submit">جست‌وجو</button>
          </form>

          <nav className="header-actions">
            <a href="/account">حساب من</a>
            <a href="/cart" className="cart-link">
              🛒 سبد خرید
            </a>
          </nav>
        </div>
      </header>

      <div className="announcement">
        بازار آنلاین افغانستان؛ خرید و فروش در سراسر کشور
      </div>

      <section className="hero container">
        <div className="hero-content">
          <span className="hero-label">به افغان مارکت خوش آمدید</span>
          <h1>
            بازار بزرگ افغانستان،
            <br />
            در دستان شما
          </h1>
          <p>
            محصولات متنوع را پیدا کنید، از فروشگاه‌های مختلف خرید کنید
            و فروشگاه آنلاین خود را در افغان مارکت بسازید.
          </p>
          <div className="hero-buttons">
            <a href="/products" className="button-primary">
              شروع خرید
            </a>
            <a href="/seller/register" className="button-secondary">
              فروشنده شوید
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card">
            <span>🇦🇫</span>
            <strong>افغان مارکت</strong>
            <small>یک بازار، تمام افغانستان</small>
            <div className="visual-icons">📱 👟 🎁 🛍️</div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">انتخاب آسان</span>
            <h2>دسته‌بندی محصولات</h2>
          </div>
          <a href="/categories">همه دسته‌ها ←</a>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <a
              href={`/categories/${index + 1}`}
              class
