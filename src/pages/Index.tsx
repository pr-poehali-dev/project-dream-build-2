import { Compass, Lock, Sparkles, ShieldCheck, Wallet, Leaf, Plus, Minus, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Насколько физически сложен этот тур?",
      answer:
        "Экспедиция требует хорошей физической формы — вам предстоит передвижение по пещере с неровным рельефом, спуски и подъёмы с помощью снаряжения. Специального опыта спелеологии не нужно — наши гиды обучат всему на месте. Подходит для активных людей без серьёзных проблем со здоровьем.",
    },
    {
      question: "Что входит в стоимость тура?",
      answer:
        "В стоимость экспедиции включены: профессиональные гиды-спелеологи, всё необходимое снаряжение (каски, фонари, обвязки), питание на маршруте, трансфер от точки сбора и страховка экстренной эвакуации. Личные вещи и дорога до точки сбора оплачиваются отдельно.",
    },
    {
      question: "Безопасно ли исследовать пещеры?",
      answer:
        "Безопасность — наш абсолютный приоритет. Все гиды — сертифицированные спасатели и опытные спелеологи. Мы используем профессиональное снаряжение, ведём мониторинг погоды и имеем чёткие протоколы на все нештатные ситуации. За годы работы — ни одного серьёзного инцидента.",
    },
    {
      question: "Как забронировать место?",
      answer:
        "Группы ограничены 8–10 участниками, поэтому места расходятся быстро. Оставьте заявку через форму ниже или напишите нам напрямую. Предоплата 50% фиксирует ваше место, полная оплата — за 14 дней до старта экспедиции.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/e01bcdc4-1c2a-487f-bdf1-276413b6edce/files/639609bf-3db2-4033-86a6-f0c39d8882c5.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/85" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Compass className="w-5 h-5" />
            <span className="font-medium text-balance">Horizon Adventures</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Экспедиция", "Безопасность", "Маршрут", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Забронировать</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Экспедиции в пещеры · Малые группы · Профессиональные гиды</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Спуститесь<br />в подземный мир.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Организуем незабываемые спелеоэкспедиции для искателей приключений. Профессиональные гиды, полное снаряжение и маршруты любой сложности — от новичков до опытных спелеологов.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Забронировать экспедицию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Смотреть маршруты
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Lock className="w-4 h-4" />
            <span className="text-sm font-medium">Безопасность — наш приоритет · 100% снаряжение включено</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Expert Guides */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Опытные гиды</h3>
              <p className="text-white/80 leading-relaxed">Сертифицированные спелеологи и спасатели с многолетним опытом подземных экспедиций.</p>
            </div>

            {/* Safety */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Безопасность</h3>
              <p className="text-white/80 leading-relaxed">Строгие протоколы безопасности, профессиональное снаряжение и постоянная связь с базой.</p>
            </div>

            {/* All-Inclusive */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Всё включено</h3>
              <p className="text-white/80 leading-relaxed">Снаряжение, питание, трансфер и страховка — всё в одной цене без скрытых доплат.</p>
            </div>

            {/* Eco */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Бережно к природе</h3>
              <p className="text-white/80 leading-relaxed">Соблюдаем принципы ответственного туризма и сохраняем хрупкие подземные экосистемы.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Как проходит экспедиция</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Четыре этапа незабываемого приключения под землёй.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Phase 1 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Сбор и инструктаж</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Встречаемся на точке сбора. Гиды проводят подробный инструктаж по безопасности, выдают снаряжение и знакомят с маршрутом.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Путь ко входу</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Добираемся до входа в пещеру. По пути гид рассказывает о геологии, истории и живых обитателях подземного мира.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Спелеомаршрут</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Исследуем залы, галереи, сталактиты и подземные реки. Спуски на верёвках, узкие ходы и потрясающие виды — всё включено.
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Возвращение</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Выходим на поверхность с незабываемыми впечатлениями. Разбор маршрута с гидом, фото на память и возвращение в точку сбора.
                  </p>
                </div>
              </div>
            </div>

            {/* Check Availability Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Забронировать место
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать перед первой (или не первой!) экспедицией в пещеру.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                      placeholder="Расскажите, какой маршрут вас интересует, сколько человек в группе и предпочтительные даты..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Хотите узнать больше о конкретном маршруте, записать группу или задать вопрос? Напишите нам — ответим в течение одного рабочего дня.
                  </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                      alt="Руководитель экспедиций"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">Александр Громов</h4>
                      <p className="text-gray-600">Руководитель экспедиций</p>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать напрямую
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-center">
                    <div className="text-3xl font-bold mb-1">200+</div>
                    <div className="text-white/60 text-sm">участников</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-center">
                    <div className="text-3xl font-bold mb-1">15+</div>
                    <div className="text-white/60 text-sm">пещер</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-center">
                    <div className="text-3xl font-bold mb-1">8 лет</div>
                    <div className="text-white/60 text-sm">опыта</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Newsletter */}
            <div>
              <h3 className="text-2xl font-bold mb-3">Подпишитесь на новости экспедиций</h3>
              <p className="text-white/60 mb-6">Новые маршруты, открытие записи и советы для спелеологов.</p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-3 rounded-full bg-white/10 ring-1 ring-white/20 focus:outline-none focus:ring-white/40 text-white placeholder-white/40"
                />
                <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">
                  Подписаться
                </Button>
              </div>
            </div>

            {/* Logo & Copyright */}
            <div className="lg:text-right">
              <div className="flex items-center gap-2 mb-4 lg:justify-end">
                <Compass className="w-5 h-5" />
                <span className="font-semibold text-lg">Horizon Adventures</span>
              </div>
              <p className="text-white/40 text-sm">© 2026 Horizon Adventures. Все права защищены.</p>
              <p className="text-white/40 text-sm mt-1">Организуем пещерные экспедиции с 2018 года.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
