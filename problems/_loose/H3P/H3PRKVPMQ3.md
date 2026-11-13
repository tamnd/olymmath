---
tag: H3PRKVPMQ3
kind: problem
type: answer
answer: 1!*2!*...*n!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0005.parquet#row=131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A polynomial $f(x)=\sum_{i=0}^{n} a_{i} x^{i}$ of degree $n$ or less is called happy if
(i) Each coefficient $a_{i}$ satisfies $0 \leq a_{i}<1$;
(ii) $f(x)$ is an integer for all integers $x$.
Find the number of happy polynomials of degree $n$ or less.
