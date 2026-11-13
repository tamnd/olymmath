---
tag: SNDCDVEKBR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=176943
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The polynomials $P_{n}(x, y), n=1,2, \ldots$ are defined by $P_{1}(x, y)=1, P_{n+1}(x, y)=(x+y-1)(y+1) P_{n}(x, y+2)+\left(y-y^{2}\right) P_{n}(x, y)$.

Prove that $P_{n}(x, y)=P_{n}(y, x)$ for all $x, y$ and $n$.
