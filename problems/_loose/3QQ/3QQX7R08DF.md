---
tag: 3QQX7R08DF
kind: problem
type: answer
answer: f(n) = n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246849
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a function $f:\mathbb{Z}\to \mathbb{Z}$ such that:

$$f(m^2+f(n))=f^2(m)+n,\ \forall m,n\in \mathbb{Z}$$

Prove that:

a)$f(0)=0$;
b)$f(1)=1$;
c)$f(n)=n,\ \forall n\in \mathbb{Z}$

*Lucian Dragomir*
