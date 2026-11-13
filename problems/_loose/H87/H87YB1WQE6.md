---
tag: H87YB1WQE6
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=174044
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
\left|\begin{array}{ll}
1 & 2 \\
1 & 2
\end{array}\right|=1 ; \left|\begin{array}{ccc}
1 & 1 & 1 \\
1 & 2 & 2 \\
1 & 2 & 3
\end{array}\right|=1
$$

as a generalization, show that if the element $a_{ik}$ of the $n$-th order determinant is equal to the smaller of the numbers $i$ and $k$, (or the common value of $i$ and $k$ when $i=k$), then the value of the determinant is 1.
