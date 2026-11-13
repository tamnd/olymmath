---
tag: C3M4QPHTB0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236265
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A circle is divided into arcs of equal size by $n$ points ($n \ge 1$). For any positive integer $x$, let $P_n(x)$ denote the number of possibilities for colouring all those points, using colours from $x$ given colours, so that any rotation of the colouring by $ i \cdot \frac{360^o}{n}$ , where i is a positive integer less than $n$, gives a colouring that differs from the original in at least one point. Prove that the function $P_n(x)$ is a polynomial with respect to $x$.
