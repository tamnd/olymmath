---
tag: K7DNNTWSEG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111109
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \in Z$, the function $f: Z \rightarrow R$ satisfies
$$
f(n)=\left\{\begin{array}{l}
n-10, \text { when } n>100 \text {, } \\
f(f(n+11)), \text { when } n \leqslant 100 \text {, }
\end{array}\right.
$$

Prove that for any $n \leqslant 100$, $f(n)=91$.
