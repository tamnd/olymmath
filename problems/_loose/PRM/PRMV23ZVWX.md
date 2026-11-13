---
tag: PRMV23ZVWX
kind: problem
type: answer
answer: 2<\frac{1}{x_{1}+1}+\frac{1}{x_{2}+1}+\cdots+\frac{1}{x_{2002}+1}<3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105508
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(2002-2003 Finnish High School Mathematics Competition) Let the sequence $\left\{x_{n}\right\}$ satisfy $x_{1}=\frac{1}{3}$ and $x_{k+1}=$ $x_{k}+x_{k}^{2}, k=1,2, \cdots$ Then the value of $\frac{1}{x_{1}+1}+\frac{1}{x_{2}+1}+\cdots+\frac{1}{x_{20 \times 2}+1}$ lies between which two consecutive integers?
