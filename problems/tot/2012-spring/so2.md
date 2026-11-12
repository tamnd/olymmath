---
tag: P8QX6JN7Q0
kind: problem
appearances:
  - at: tot/2012-spring/so2
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 116713
    url: https://problems.ru/view_problem_details_new.php?id=116713
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2012-spring official paper
    url: https://turgor.ru/problems/33/vs33baz-avt.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftohtml (om-rutex/1)
    confidence: 0.9
status:
  statement: captured
---
Дана клетчатая полоска из $2n$ клеток, пронумерованных слева направо следующим образом: $1, 2, 3,\ldots,n,-n,\ldots,-2,-1$.
По этой полоске перемещают фишку, каждым ходом сдвигая ее на то число клеток, которое указано в текущей клетке (вправо, если число положительно, и влево, если отрицательно). Известно, что фишка, начав с любой клетки, обойдет все клетки полоски. Докажите, что число $2n + 1$ простое.
