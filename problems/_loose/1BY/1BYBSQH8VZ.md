---
tag: 1BYBSQH8VZ
kind: problem
type: answer
answer: 2 + \sqrt{a_n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232518
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a sequence {$a_n$}$^{\infty}_{n=1}$ by $a_1 = 4, a_2 = a_3 = (a^2 - 2)^2$ and

$a_n = a_{n-1}.a_{n-2} - 2(a_{n-1} + a_{n-2}) - a_{n-3} + 8, n \ge 4$, where $a > 2$ is a natural number.

Prove that for all $n$ the number $2 + \sqrt{a_n}$ is a perfect square.
