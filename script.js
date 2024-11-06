const quotes = [
  {
    quote:
      'Успех — это способность идти от поражения к поражению, не теряя энтузиазма.',
    author: 'Уинстон Черчиль',
  },
  {
    quote: 'Будьте той переменой, которую хотите увидеть в мире',
    author: 'Махатма Ганди',
  },
  {
    quote:
      'Выберите себе работу по душе, и вам не придется работать ни одного дня в своей жизни',
    author: 'Конфуций',
  },
  {
    quote:
      'Единственный способ сделать что-то очень хорошо — любить то, что ты делаешь.',
    author: 'Стив Джобс',
  },
  {
    quote: 'Секрет успеха — это делать обычные вещи необыкновенно хорошо.',
    author: 'Джон Д. Рокфеллер',
  },
  {
    quote: 'Трудности — это шанс стать лучше.',
    author: 'Дюк Эллингтон',
  },
  {
    quote: 'Неудача — это просто возможность начать снова, но уже более мудро.',
    author: 'Генри Форд',
  },
  {
    quote:
      'Каждая великая мечта начинается с мечтателя. Всегда помните, у вас есть сила, терпение и страсть, чтобы достичь звезд и изменить мир.',
    author: 'Гарриет Тубман',
  },
  {
    quote: 'Мудрость — это способность держать дистанцию от своих эмоций.',
    author: 'Далай-лама',
  },
  {
    quote:
      'Чтобы достичь величия, мы должны не только действовать, но и мечтать, не только планировать, но и верить.',
    author: 'Анатоль Франс',
  },
]

const quoteElement = document.getElementById('quote')
const quoteAuthorElement = document.getElementById('quote-author')
const generateBtn = document.getElementById('generate-btn')

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]
  const { quote, author } = randomQuote
  quoteElement.textContent = quote
  quoteAuthorElement.textContent = author
}

generateBtn.addEventListener('click', generateRandomQuote)

generateRandomQuote()
