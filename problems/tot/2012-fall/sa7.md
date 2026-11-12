---
tag: DF63WAX315
kind: problem
appearances:
  - at: tot/2012-fall/sa7
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 116840
    url: https://problems.ru/view_problem_details_new.php?id=116840
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2012-fall official paper
    url: https://turgor.ru/problems/34/os34sl-avt.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftohtml (om-rutex/1)
    confidence: 0.9
status:
  statement: captured
---
Клетчатая полоска $1 \times 1000000$ разбита на 100 сегментов. В каждой клетке записано целое число, причем в клетках, лежащих в одном сегменте, числа совпадают. В каждую клетку поставили по фишке. Затем сделали такую операцию: все фишки одновременно передвинули, каждую — на то количество клеток вправо, которое указано в ее клетке (если число отрицательно, то фишка двигается влево); при этом оказалось, что в каждую клетку снова попало по фишке. Эту операцию повторяют много раз. Для каждой фишки первого сегмента посчитали, через сколько операций она впервые снова окажется в этом сегменте. Докажите, что среди посчитанных чисел не более 100 различных.
