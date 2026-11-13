---
tag: Y92ZN3RDYE
kind: problem
appearances:
  - at: tot/2009-spring/so3
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 64516
    url: https://problems.ru/view_problem_details_new.php?id=64516
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2009-spring official page
    url: https://turgor.ru/problems/30/index.php
    origin: H1
    zone: Z2
    kind: official
    extraction: native/html (claude-opus-5-5)
    confidence: 0.9
status:
  statement: captured
---
Для каждого натурального числа $n$ обозначим через $O(n)$ его наибольший нечетный делитель. Даны произвольные натуральные числа $x_1=a$ и $x_2=b$. Построим бесконечную последовательность натуральных чисел по правилу: $x_n=O(x_{n-1}+x_{n-2})$, где $n=3, 4, \ldots$.

а) Докажите, что, начиная с некоторого места, все числа в последовательности будут равны одному и тому же числу.

б) Как найти это число, зная числа $a$ и $b$?
