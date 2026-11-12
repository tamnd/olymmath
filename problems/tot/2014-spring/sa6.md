---
tag: CR8CZDN32P
kind: problem
appearances:
  - at: tot/2014-spring/sa6
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 64663
    url: https://problems.ru/view_problem_details_new.php?id=64663
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2014-spring official paper
    url: https://turgor.ru/problems/35/vs-35-sl-avt.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftohtml (om-rutex/1)
    confidence: 0.9
status:
  statement: captured
---
Каждому городу в некоторой стране присвоен индивидуальный номер. Имеется список, в котором для каждой пары номеров указано, соединены города с данными номерами железной дорогой или нет. Оказалось, что, какие ни взять два номера $M$ и $N$ из списка, можно так перенумеровать города, что город с номером $M$ получит номер $N$, но список по-прежнему будет верным. Верно ли, что, какие ни взять два номера $M$ и $N$ из списка, можно так перенумеровать города, что город с номером $M$ получит номер $N$, город с номером $N$ получит номер $M$, но список по-прежнему будет верным?
