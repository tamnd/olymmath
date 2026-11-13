---
tag: CVF68CQB4B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=71862
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each natural number $n$, let $s(n)$ denote the sum of the digits in its decimal representation. We will call a natural number $m$ special if it cannot be expressed in the form $m=n+s(n)$. (For example, the number 117 is not special, since $117=108+s(108)$, and the number 121, as one can easily verify, is special.) Is it true that there are only finitely many special numbers?
