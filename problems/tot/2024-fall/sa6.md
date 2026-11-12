---
tag: V05NH347HJ
kind: problem
appearances:
  - at: tot/2024-fall/sa6
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67496
    url: https://problems.ru/view_problem_details_new.php?id=67496
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2024-fall official paper
    url: https://turgor.ru/problems/46/os-46-sl-avt.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftohtml (om-rutex/1)
    confidence: 0.9
status:
  statement: captured
---
Замок Мерлина состоит из 100 комнат и 1000 коридоров. Каждый коридор соединяет какие-то две комнаты, каждые две комнаты соединены не более чем одним коридором. Мерлин выдал мудрецам план замка и объявил испытание. Мудрецы должны будут распределиться по комнатам, как хотят. Далее каждую минуту Мерлин указывает коридор, и один из мудрецов переходит по нему из комнаты на любом его конце в комнату на другом его конце. Мерлин победит, если когда-то укажет коридор, на концах которого нет мудрецов.
Число $m$ назовём волшебным числом замка, если $m$ мудрецов могут, сговорившись перед испытанием, действовать так, чтобы никогда не проиграть, причём $m$ — минимальное такое число. Чему может равняться волшебное число замка? (Все, включая Мерлина, всегда знают расположение всех мудрецов.)
