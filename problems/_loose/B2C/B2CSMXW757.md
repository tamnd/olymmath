---
tag: B2CSMXW757
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218696
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For integers $a, b$, call the lattice point with coordinates $(a,b)$ **basic** if $gcd(a,b)=1$. A graph takes the basic points as vertices and the edges are drawn in such way: There is an edge between $(a_1,b_1)$ and $(a_2,b_2)$ if and only if $2a_1=2a_2\in \{b_1-b_2, b_2-b_1\}$ or $2b_1=2b_2\in\{a_1-a_2, a_2-a_1\}$. Some of the edges will be erased, such that the remaining graph is a forest. At least how many edges must be erased to obtain this forest? At least how many trees exist in such a forest?
