---
tag: SWRS39ZE35
kind: problem
type: answer
answer: \frac{k}{1-k}for0<k<1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186088
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all positive real numbers $k$ for which the sequence $\left(x_{n}\right)$ defined by

$$
x_{1}=1, x_{n+1}=\sqrt{k\left(x_{n}^{2}+x_{n}\right)} (n=1,2,3, \ldots)
$$

is convergent.

For each such number $k$, determine the limit of the sequence $\left(x_{n}\right)$.
