---
tag: J07ABVSJ53
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92431
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
6 \cdot 48 \text { Let } N=\{1,2,3, \cdots\} \text {. }
$$

Prove whether there exists a function $f: N \rightarrow N$ such that
$$
\begin{array}{l}
f(1)=2, \\
f(f(n))=f(n)+n
\end{array}
$$

for all $n \in N$,
$$
f(n)<f(n+1)
$$

for all $n \in N$.
