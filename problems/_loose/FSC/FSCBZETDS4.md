---
tag: FSCBZETDS4
kind: problem
type: answer
answer: "3000"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20136
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Natural numbers $a, b, c$ are such that $1 \leqslant a<b<c \leqslant 3000$. Find the greatest possible value of the quantity

$$
\text { GCD }(a, b)+\text { GCD }(b, c)+\text { GCD }(c, a)
$$
