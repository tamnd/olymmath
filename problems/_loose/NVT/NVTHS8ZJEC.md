---
tag: NVTHS8ZJEC
kind: problem
type: answer
answer: \left( \frac{3}{4} \right)^{\binom{n}{3}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240899
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$ R_k(m,n)$ is the least number such that for each coloring of $ k$-subsets of $ \{1,2,\dots,R_k(m,n)\}$ with blue and red colors, there is a subset with $ m$ elements such that all of its k-subsets are red or there is a subset with $ n$ elements such that all of its $ k$-subsets are blue.
a) If we give a direction randomly to all edges of a graph $ K_n$ then what is the probability that the resultant graph does not have directed triangles?
b) Prove that there exists a $ c$ such that $ R_3(4,n)\geq2^{cn}$.
