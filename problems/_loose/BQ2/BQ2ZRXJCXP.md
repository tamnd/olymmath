---
tag: BQ2ZRXJCXP
kind: problem
type: answer
answer: 629,1679
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182602
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are looking for all natural numbers $n$ with the following properties:

1. It is $n=p_{1} \cdot p_{2}$; the product of two (proper) two-digit prime numbers $p_{1}$ and $p_{2}$.
2. For the cross sum $Q(n)$, it holds that $Q(n)=p_{1}$ with $p_{1}<p_{2}$.
3. The units digits of $p_{1}$ and $p_{2}$ are the same.
4. Also $p_{1} \pm 6$ is a (proper) two-digit prime number.
