---
tag: AQFKX0QJ08
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184788
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
\section*{Problem $3-330933=331033$}

Antje found the following approximate construction for regular polygons with a given side length $s$ in an older geometry book:

Construct an equilateral triangle $A B C$ with side length $s$. Then construct the midpoint $D$ of $A B$ and extend the segment $D C$ beyond $C$.

On this extension, mark off successive segments of length $\frac{s}{6}$. The points obtained in this sequence are denoted as $M_{7}, M_{8}, M_{9}, \ldots$.

For $n>6$, the circle passing through $A$ and $B$ with center $M_{n}$ is approximately the circumcircle of a regular $n$-gon with side length $s$.

Beate claims that for $n=12$, this is not just an approximation but is actually exact.

Prove this claim!
