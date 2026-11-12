---
tag: 8W4EHN62MF
kind: problem
appearances:
  - at: tot/2010-fall/sa4
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 116050
    url: https://problems.ru/view_problem_details_new.php?id=116050
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2010-fall official paper
    url: https://turgor.ru/problems/32/os32os-avt.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftohtml (om-rutex/1)
    confidence: 0.9
status:
  statement: captured
---
Два мага сражаются друг с другом. Вначале они оба парят над морем на высоте 100 м. Маги по очереди применяют заклинания вида «уменьшить высоту парения над морем на $a$ м у себя и на $b$ м у соперника», где $a$, $b$ — действительные числа, $0 < a < b$. Набор заклинаний у магов один и тот же, их можно использовать в любом порядке и неоднократно. Маг выигрывает дуэль, если после чьего-либо хода его высота над морем будет положительна, а у соперника — нет. Существует ли такой набор заклинаний, что второй маг может гарантированно выиграть (как бы ни действовал первый), если при этом число заклинаний в наборе
а) конечно;
б) бесконечно?
