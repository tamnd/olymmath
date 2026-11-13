---
tag: MVCQFP1178
kind: problem
type: answer
answer: x_{100}=-,S_{100}=2b-
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97685
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{x_{n}\right\}$ satisfies $x_{n+1}=x_{n}-x_{n-1}(n \geqslant 2), x_{1}=a, x_{2}=b$, and let $S_{n}=x_{1}+x_{2}+\cdots$ $+x_{n}$, then the correct conclusion is ( ).
A. $x_{100}=-a, S_{100}=2 b-a$
B. $x_{100}=-b, S_{100}=2 b-a$
C. $x_{100}=-b, S_{100}=b-a$
D. $x_{100}=-a, S_{100}=b-a$
