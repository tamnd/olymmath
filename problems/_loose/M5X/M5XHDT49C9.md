---
tag: M5XHDT49C9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125233
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)$ be a continuous function defined on $0 \leqslant x \leqslant 1$, with $f(0)=0, f(1)=1$. Also, for any $x, 0<x<1$, there exists $h$ such that when $0 \leqslant x-h<x+h \leqslant 1$,
$$
f(x)=\frac{f(x-h)+f(x+h)}{2} .
$$

Prove: For $0 \leqslant x \leqslant 1, f(x)=x$.
