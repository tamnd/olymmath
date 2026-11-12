---
tag: GVEG0SJ3CZ
kind: problem
type: answer
answer: k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1386
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1981
    source: hf-numinamath-1-5
    label: XXXII - II - Task 4
---
Given are natural numbers $ k, n $. We define inductively two sequences of numbers $ (a_j) $ and $ (r_j) $ as follows:
First step: divide $ k $ by $ n $ and obtain the quotient $ a_1 $ and the remainder $ r_1 $,
j-th step: divide $ k + r_{j-1} $ by $ n $ and obtain the quotient $ a_j $ and the remainder $ r_j $. Calculate the sum $ a_1 + \ldots + a_n $.
