---
tag: T0NRET1XTY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=7089
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(10 points) A numerical sequence is given:

$$
x_{0}=\frac{1}{n} ; x_{k}=\frac{1}{n-k}\left(x_{0}+x_{1}+\ldots+x_{k-1}\right) ; k=1,2, \ldots, n-1
$$

Find $S_{n}=x_{0}+x_{1}+\ldots+x_{n-1}$, if $n=2022$.
