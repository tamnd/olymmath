---
tag: 5T4E15M7SW
kind: problem
appearances:
  - at: tot/2021-spring/ja6
    primary: true
  - at: tot/2021-spring/sa5
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66904
    url: https://problems.ru/view_problem_details_new.php?id=66904
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: en
    source: hf-aops-wiki
    name: AoPS wiki problems
    url: https://artofproblemsolving.com/community/c6h3017321p27113612
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-ai-mo-aops
    name: Kvant 2021
    url: https://artofproblemsolving.com/community/c6h3017321
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26588
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A hundred tourists arrive to a hotel at night. They know that in the hotel there are single rooms numbered as $1, 2, \ldots , n$, and among them $k{}$ (the tourists do not know which) are under repair, the other rooms are free. The tourists, one after another, check the rooms in any order (maybe different for different tourists), and the first room not under repair is taken by the tourist. The tourists don't know whether a room is occupied until they check it. However it is forbidden to check an occupied room, and the tourists may coordinate their strategy beforehand to avoid this situation. For each $k{}$ find the smallest $n{}$ for which the tourists may select their rooms for sure.

Fyodor Ivlev
