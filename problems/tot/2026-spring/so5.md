---
tag: F100PE0MXQ
kind: problem
appearances:
  - at: tot/2026-spring/so5
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67639
    url: https://problems.ru/view_problem_details_new.php?id=67639
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
Квадрат $N \times N$ разбит на $N^2$ единичных квадратов. Одна из вершин единичных квадратов радиоактивна. Имеется также прибор, который про любой из этих единичных квадратов определяет, есть ли среди его вершин радиоактивная. Найдите радиоактивную вершину за наименьшее число проверок, если
а) $N = 7$;
б) $N = 8$.
