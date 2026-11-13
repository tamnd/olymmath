---
tag: HE6AJNPQ6F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a graph $G$, consider the following two quantities,

$\bullet$ Assign to each vertex a number in $\{0,1,2\}$ such that for every edge $e=uv$, the numbers assigned to $u$ and $v$ have sum at least $2$. Let $A(G)$ be the minimum possible sum of the numbers written to each vertex satisfying this condition.

$\bullet$ Assign to each edge a number in $\{0,1,2\}$ such that for every vertex $v$, the sum of numbers on all edges containing $v$ is at most $2$. Let $B(G)$ be the maximum possible sum of the numbers written to each edge satisfying this condition.

Prove that $A(G)=B(G)$ for every graph $G$.
