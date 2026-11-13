---
tag: EBXFP8F3V2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190457
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the real numbers $a_{1}, a_{2}, \ldots, a_{n}$ and $b_{1}, b_{2}, \ldots, b_{n}$. If

$$
S_{k}=b_{1}+b_{2}+\ldots+b_{k}, k=1,2,3 \ldots, n
$$

prove that

$$
a_{1} b_{1}+a_{2} b_{2}+\ldots+a_{n} b_{n}=\left(a_{1}-a_{2}\right) S_{1}+\left(a_{2}-a_{3}\right) S_{2}+\ldots+\left(a_{n-1}-a_{n}\right) S_{n-1}+a_{n} S_{n}
$$
