---
tag: SF3MTVK19T
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115502
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the largest real number $k$ such that for any triangle with sides $a$, $b$, and $c$, the following inequality holds:
$$
\frac{b c}{b+c-a}+\frac{a c}{a+c-b}+\frac{a b}{a+b-c} \geqslant k(a+b+c) .
$$
