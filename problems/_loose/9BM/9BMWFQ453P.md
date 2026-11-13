---
tag: 9BMWFQ453P
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119728
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integers $n$ such that for any two $n$-degree polynomials $P(x), Q(x)$, there exist monomials $a x^{k}, b x^{l}$ (where $a, b$ are real numbers, and integers $k, l$ satisfy $0 \leqslant k, l \leqslant n$), such that the graphs of $P(x)+a x^{k}, Q(x)+b x^{l}$ have no intersection points.
