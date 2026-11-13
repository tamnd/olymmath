---
tag: WJ9PGWRVH1
kind: problem
type: answer
answer: (k, m, n) = (28, 5, 2023)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251199
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all triples $(k, m, n)$ of positive integers such that $m$ is a prime and:

(1) $kn$ is a perfect square;

(2) $\frac{k(k-1)}{2}+n$ is a fourth power of a prime;

(3) $k-m^2=p$ where $p$ is a prime;

(4) $\frac{n+2}{m^2}=p^4$.
