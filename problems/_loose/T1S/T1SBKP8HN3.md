---
tag: T1SBKP8HN3
kind: problem
type: answer
answer: n = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246192
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integers $n$ for which there exist real numbers $x_1, x_2,. . . , x_n$ satisfying all of the following conditions:
(i) $-1 <x_i <1,$ for all $1\leq i \leq n.$
(ii) $ x_1 + x_2 + ... + x_n = 0.$
(iii) $\sqrt{1 - x_1^2} +\sqrt{1 - x^2_2} + ... +\sqrt{1 - x^2_n} = 1.$
