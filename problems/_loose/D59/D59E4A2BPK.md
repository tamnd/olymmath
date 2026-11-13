---
tag: D59E4A2BPK
kind: problem
type: answer
answer: a_n = 4 \cdot (2^n - 1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266568
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1, a_2, a_3, \ldots$ be an infinite sequence of positive integers such that $a_1=4$, $a_2=12$, and for all positive integers $n$, $$a_{n+2}=\gcd\left(a_{n+1}^2-4,a_n^2+3a_n \right).$$ Find, with proof, a formula for $a_n$ in terms of $n$.
