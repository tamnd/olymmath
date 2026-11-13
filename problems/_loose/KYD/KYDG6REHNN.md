---
tag: KYDG6REHNN
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=112
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia Russian Mathematical Olympiad
---
For any positive integers $a > b > 1$, a sequence $x_1, x_2, \dots$ is defined as $x_n = \frac{a^n - 1}{b^n - 1}$. Find the least integer $d$ such that for any $a$ and $b$, this sequence cannot contain $d$ consecutive terms that are prime numbers. (V. Senderov)
