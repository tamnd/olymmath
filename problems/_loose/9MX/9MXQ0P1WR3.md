---
tag: 9MXQ0P1WR3
kind: problem
type: answer
answer: x+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148666
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $P$ with integer coefficients such that $P (0)\ne 0$ and $$P^n(m)\cdot P^m(n)$$ is a square of an integer for all nonnegative integers $n, m$.

*Remark:* For a nonnegative integer $k$ and an integer $n$, $P^k(n)$ is defined as follows: $P^k(n) = n$ if $k = 0$ and $P^k(n)=P(P(^{k-1}(n))$ if $k >0$.

Proposed by Adrian Beker.
