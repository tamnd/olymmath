---
tag: RVN91RSAQT
kind: problem
type: answer
answer: "14"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89843
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $d(n)$ denote the number of positive divisors of the number $n$, and $s(n)$ the sum of all positive divisors of the number $n$. Determine all natural numbers $n$ for which

$$
4 s(n)=3 d(n)^{2}+1
$$
