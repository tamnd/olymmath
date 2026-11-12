---
tag: 1AWNPJ2Q36
kind: problem
appearances:
  - at: tot/2026-spring/jo4
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67633
    url: https://problems.ru/view_problem_details_new.php?id=67633
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2026-spring official paper
    url: https://turgor.ru/problems/47/vs-47-baz-avt.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftohtml (om-rutex/1)
    confidence: 0.9
status:
  statement: captured
---
В каждой клетке доски $N \times N$ стоит по шкатулке. В одной из них лежит приз. Пустая шкатулка весит 100 грамм, а вес шкатулки с призом равен суммарному весу всех шкатулок в соседних с ней по стороне клетках. У ведущего есть двухчашечные весы без гирь, на каждую чашу помещается сколько угодно шкатулок. За одну попытку можно указать ведущему, какие шкатулки положить на какую чашу (а какие не взвешивать), и он сообщит результат: будут ли весы в равновесии, а если нет — какая чаша перевесит. За какое наименьшее количество попыток можно гарантированно узнать, сколько весит приз, если
а) $N = 4$;
б) $N = 7$?
(Узнавать, в какой именно шкатулке лежит приз, не требуется.)
