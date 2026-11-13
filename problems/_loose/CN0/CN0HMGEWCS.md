---
tag: CN0HMGEWCS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143520
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $I=(0,1]$, for a given $a \in(0,1)$, define the function $f: I \rightarrow I$ as follows:
$$
f(x)=\left\{\begin{array}{l}
x+(1-a), \text { when } 0<x \leqslant a \text {, } \\
x-a, \text { when } a<x \leqslant 1 \text {, }
\end{array}\right.
$$

Prove: For any interval $J \subset I$, there exists $n \in \mathbb{N}$, such that the intersection $f^{n}(J) \cap J$ is non-empty.
