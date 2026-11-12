---
tag: FGVRVW52CC
kind: problem
appearances:
  - at: tot/2024-spring/sa3
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67432
    url: https://problems.ru/view_problem_details_new.php?id=67432
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
В каждой клетке таблицы $N \times N$ записано число. Назовём клетку $C$ хорошей, если в какой-то из клеток, соседних с $C$ по стороне, стоит число на 1 больше, чем в $C$, а в какой-то другой из клеток, соседних с $C$ по стороне, стоит число на 3 больше, чем в $C$. Каково наибольшее возможное количество хороших клеток?
