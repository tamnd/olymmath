---
tag: PS2HKPW1EJ
kind: problem
type: answer
answer: 2^{k-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204026
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's call integer square-free if it's not divisible by $p^2$ for any prime $p$. You are given a square-free integer $n>1$, which has exactly $d$ positive divisors. Find the largest number of its divisors that you can choose, such that $a^2 + ab - n$ isn't a square of an integer for any $a, b$ among chosen divisors.

*(Proposed by Oleksii Masalitin)*
