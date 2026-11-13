---
tag: TN7NKRBPFA
kind: problem
type: answer
answer: 0,30,42,45
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154892
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice and Bob take it in turns to write numbers on a blackboard. Alice starts by writing an integer $a$ between -100 and 100 inclusive on the board. On each of Bob's turns he writes twice the number Alice wrote last. On each of Alice's subsequent turns she writes the number 45 less than the number Bob wrote last. At some point, the number $a$ is written on the board for a second time. Find the possible values of $a$.
