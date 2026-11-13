---
tag: BM48BM4C7T
kind: problem
type: answer
answer: n \equiv i_1 - i_2 + i_3 - i_4 + \ldots + i_{k-1} - i_k \pmod{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231364
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A convex $n$-gon $A_1A_2\dots A_n$ $(n>3)$ is divided into triangles by non-intersecting diagonals.
For every vertex the number of sides issuing from it is even, except for the vertices
$A_{i_1},A_{i_2},\dots,A_{i_k}$, where $1\leq i_1<\dots<i_k\leq n$. Prove that $k$ is even and
$$n\equiv i_1-i_2+\dots+i_{k-1}-i_k\pmod3$$
if $k>0$ and
$$n\equiv0\pmod3\text{ for }k=0.$$
