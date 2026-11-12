---
tag: NBQSC28BAS
kind: problem
appearances:
  - at: tot/2008-fall/ja7
    primary: true
  - at: tot/2008-fall/sa5
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 111688
    url: https://problems.ru/view_problem_details_new.php?id=111688
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2008-fall official page
    url: https://turgor.ru/problems/30/os30os.tex
    origin: H1
    zone: Z2
    kind: official
    extraction: native/tex (om-rutex/1)
    confidence: 0.9
status:
  statement: captured
---
В бесконечной последовательности $a_1, a_2, a_3, \dots$ число $a_1$ равно 1, а каждое следующее число $a_n$ строится из предыдущего $a_{n-1}$ по правилу: если у числа $n$ наибольший нечетный делитель имеет остаток 1 от деления на 4, то $a_n=a_{n-1}+1$, если же остаток равен 3, то $a_n=a_{n-1}-1$. Докажите, что в этой последовательности
а) число 1 встречается бесконечно много раз;
б) каждое натуральное число встречается бесконечно много раз.
(Вот первые члены этой последовательности: 1, 2, 1, 2, 3, 2, 1, 2, 3, 4, 3, ...)
