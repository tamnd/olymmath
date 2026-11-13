---
tag: T1Z0JPGQ0R
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91942
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
87 Given the complex sequence $\left\{a_{n}\right\}$ with the general term:
$$
a_{n}=(1+i)\left(1+\frac{i}{\sqrt{2}}\right)\left(1+\frac{i}{\sqrt{3}}\right) \cdots\left(1+\frac{i}{\sqrt{n}}\right)
$$

then $\left|a_{n}-a_{n+1}\right|=$
A. $\frac{\sqrt{2}}{2}$
B. $\sqrt{2}$
C. 1
D. 2
