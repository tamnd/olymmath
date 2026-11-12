---
tag: P2T61BF6CD
kind: problem
appearances:
  - at: tot/2018-spring/ja7
    primary: true
  - at: tot/2018-spring/sa5
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66707
    url: https://problems.ru/view_problem_details_new.php?id=66707
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2018-spring official paper
    url: https://turgor.ru/problems/39/vs-39-sl-avt.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftohtml (om-rutex/1)
    confidence: 0.9
status:
  statement: captured
---
В некотором государстве сложение и вычитание обозначаются знаками «!» и «?», но вам неизвестно, какой знак какой операции соответствует. Каждая операция применяется к двум числам, но про вычитание вам неизвестно, вычитается левое число из правого или правое из левого. К примеру, выражение $a?b$ обозначает одно из следующих: $a - b$, $b - a$ или $a + b$. Вам неизвестно, как записываются числа в этом государстве, но переменные $a$, $b$ и скобки есть и используются как обычно. Объясните, как с помощью них и знаков «!», «?» записать выражение, которое гарантированно равно $20a - 18b$.
