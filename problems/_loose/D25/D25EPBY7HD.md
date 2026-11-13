---
tag: D25EPBY7HD
kind: problem
type: answer
answer: All nonnegative pairs with either b > 0 and a >= b^4, or b = 0 and a = 0.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0000.parquet#row=343
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl
    source: hf-mathnet
    label: Baltic Way Baltic Way SHL
---
Characterise all non-negative real numbers $a$ and $b$ such that the equation
$$
\sqrt{x + 2\sqrt{a}} - \sqrt{x - 2\sqrt{a}} = 2b
$$
has at least one real solution. (All roots are assumed to be real.)
