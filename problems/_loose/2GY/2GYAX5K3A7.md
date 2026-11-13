---
tag: 2GYAX5K3A7
kind: problem
type: answer
answer: a_{n}=\sqrt{\frac{2^{n-2}}{1+2^{n-1}}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=139363
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of positive terms $\left\{a_{n}\right\}$ satisfying:
$$
a_{1}=\frac{1}{2}, a_{n+1}^{2}=\frac{2 a_{n}^{2}}{1+2 a_{n}^{2}} \text {. }
$$

then $a_{n}=$
