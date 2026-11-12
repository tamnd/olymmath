---
tag: D5ZYY8SYM5
kind: problem
appearances:
  - at: tot/2026-spring/so4
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67638
    url: https://problems.ru/view_problem_details_new.php?id=67638
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2026-spring official paper
    url: https://turgor.ru/problems/47/vs-47-baz-avt.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftohtml (om-rutex/1)
    confidence: 0.9
status:
  statement: captured
---
Дан многочлен $*x^n + *x^{n - 1} + \ldots + *x + *$, вместо каждого из $n + 1$ его коэффициентов записана звёздочка. Играют двое, ходят по очереди, за ход выбирают любую звёздочку и заменяют её на любое целое ненулевое число. Когда звёздочек не останется, игрок, сделавший последний ход, выиграет, если у получившегося многочлена есть целый корень, иначе выиграет другой игрок. При каждом натуральном $n$ выясните, кто из игроков может гарантировать себе победу, как бы ни играл его соперник.
