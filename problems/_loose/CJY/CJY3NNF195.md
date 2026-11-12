---
tag: CJY3NNF195
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h2828398
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54188
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2022
    source: hf-ai-mo-aops
    label: 2022 Romania National Olympiad
---
Let $\mathcal{F}$ be the set of pairs of matrices $(A,B)\in\mathcal{M}_2(\mathbb{Z})\times\mathcal{M}_2(\mathbb{Z})$ for which there exists some positive integer $k$ and matrices $C_1,C_2,\ldots, C_k\in\{A,B\}$ such that $C_1C_2\cdots C_k=O_2.$ For each $(A,B)\in\mathcal{F},$ let $k(A,B)$ denote the minimal positive integer $k$ which satisfies the latter property.

- Let $(A,B)\in\mathcal{F}$ with $\det(A)=0,\det(B)\neq 0$ and $k(A,B)=p+2$ for some $p\in\mathbb{N}^*.$ Show that $AB^pA=O_2.$
- Prove that for any $k\geq 3$ there exists a pair $(A,B)\in\mathcal{F}$ such that $k(A,B)=k.$
*Bogdan Blaga*
