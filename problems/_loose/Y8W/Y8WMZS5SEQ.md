---
tag: Y8WMZS5SEQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104447
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $a_{1} a_{2} a_{3}, \cdots$ satisfies:
$$
a_{1}=1, a_{n+1}=\sqrt{a_{n}^{2}+\frac{1}{a_{n}}}, n=1,2,3, \cdots
$$

Prove: there exists a positive number $\alpha$, such that $\frac{1}{2} \leqslant \frac{a_{n}}{n^{\alpha}} \leqslant 2, n=1,2,3, \cdots$
