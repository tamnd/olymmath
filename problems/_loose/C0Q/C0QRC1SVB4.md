---
tag: C0QRC1SVB4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244437
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:\mathbb{R}\rightarrow\mathbb{R}, f(x,y)=x^2-2y.$ Define the sequences $(a_n)_{n\geq1}$ and $(b_n)_{n\geq1}$ such that $a_{n+1}=f(a_n,b_n), b_{n+1}=f(b_n,a_n).$ If $4a_1-2b_1=7 :$
a) find the smallest $k\in\mathbb{N}$ for which the number $p=2^k\cdot(2^{512}a_9-b_9)$ is an integer.
b) prove that $2^{2^{10}}+2^{2^9}+1$ divides $p.$
