---
tag: 5FZDMPJSB8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=15057
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a cubic polynomial $f(x)$. We will call a cycle a triplet of distinct numbers $(a, b, c)$ such that $f(a)=b, f(b)=c$ and $f(c)=a$. It is known that eight cycles $\left(a_{i}, b_{i}, c_{i}\right), i=1,2, \ldots, 8$, have been found, involving 24 different numbers. Prove that among the eight numbers of the form $a_{i}+b_{i}+c_{i}$ there are at least three different ones.

(A.S. Galkin)
