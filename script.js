const quotes = [
  'Успех — это способность идти от поражения к поражению, не теряя энтузиазма. - Уинстон Черчиль',
  'Будьте той переменой, которую хотите увидеть в мире. - Махатма Ганди',
  'Выберите себе работу по душе, и вам не придется работать ни одного дня в своей жизни. - Конфуций',
]

const quoteElement = document.getElementById('quote')
const generateBtn = document.getElementById('generate-btn')

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]
  quoteElement.textContent = randomQuote
}

generateBtn.addEventListener('click', generateRandomQuote)

generateRandomQuote()
