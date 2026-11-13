---
tag: YF0D2QGEQE
kind: problem
appearances:
  - at: tot/2024-spring/sa7
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67435
    url: https://problems.ru/view_problem_details_new.php?id=67435
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2024-spring official paper
    url: https://turgor.ru/problems/45/vs-45-sl-avt.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftohtml (om-rutex/1)
    confidence: 0.9
status:
  statement: captured
---
Назовём полоской клетчатый многоугольник, который можно пройти целиком, начав из какой-то его клетки и далее двигаясь только в двух направлениях — вверх или вправо. Несколько таких одинаковых полосок можно вставить друг в друга, сдвигая на вектор $(-1, 1)$. Докажите, что для любой полоски, состоящей из чётного числа клеток, найдётся такое нечётное $k$, что если объединить $k$ таких же полосок, вставив их последовательно друг в друга, то полученный многоугольник можно будет разделить по линиям сетки на две равные части. (На рисунке приведён пример.)

![Figure 1](sa7.fig1.png)
