---
tag: HPYQTR2H9Z
kind: problem
type: answer
answer: a_{1}b_{1}\frac{1-q^{n}}{1-q}+b_{1}q\frac{(n-1)q^{n}-nq^{n-1}+1}{(1-q)^{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190077
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \ldots$ be an arithmetic progression with difference $d$, and $b_{1}, b_{2}, \ldots$ be a geometric progression with ratio $q, q \neq 1$.

Calculate the sum

$$
S_{n}=a_{1} b_{1}+a_{2} b_{2}+\ldots .+a_{n} b_{n}
$$