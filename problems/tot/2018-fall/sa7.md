---
tag: SFNFQ7GX48
kind: problem
appearances:
  - at: tot/2018-fall/sa7
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66734
    url: https://problems.ru/view_problem_details_new.php?id=66734
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2018-fall official paper
    url: https://turgor.ru/problems/40/os-40-sl-avt.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftohtml (om-rutex/1)
    confidence: 0.9
status:
  statement: captured
---
Рокфеллер и Маркс играют в такую игру. Имеется $n > 1$ городов, во всех одно и то же число жителей. Сначала у каждого жителя есть ровно одна монета (монеты одинаковы). За ход Рокфеллер выбирает по одному жителю из каждого города, а Маркс перераспределяет между ними их деньги произвольным образом с единственным условием, чтобы распределение не осталось таким, каким только что было. Рокфеллер выиграет, если в какой-то момент в каждом городе будет хотя бы один человек без денег. Докажите, что Рокфеллер может действовать так, чтобы всегда выигрывать, как бы ни играл Маркс, если в каждом городе
а) ровно $2n$ жителей;
б) ровно $2n - 1$ жителей.
