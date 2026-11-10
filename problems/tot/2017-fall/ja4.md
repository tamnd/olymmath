---
tag: QWZ5G4ZSJF
kind: problem
appearances:
  - at: tot/2017-fall/ja4
    primary: true
  - at: tot/2017-fall/sa1
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66336
    url: https://problems.ru/view_problem_details_new.php?id=66336
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    name: NuminaMath-1.5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There were 100 doors, each with its own key (opening only that door). The doors are numbered $1, 2, \ldots, 100$, and the keys are also numbered, but possibly with errors: the key number matches the door number or differs by 1. In one attempt, you can choose any key, any door, and check if this key fits this door.

Can you guarantee to find out which key opens which door, making no more than
a) 99 attempts;

b) 75 attempts; c) 74 attempts.
