---
tag: 4YEDS9T28E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29149
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Austria - PRN, 78). For a given subset $S$ of the set of pairs of integers, we call a function $f: S \rightarrow S$ universal if it is invertible and for any pair $(n ; m) \in S$ it satisfies the condition

$f(n, m) \in\{(n-1 ; m) ;(n+1 ; m) ;(n ; m-1) ;(n ; m+1)\}$. Prove that if there exists at least one universal function, then there exists a universal function $f(n, m)$ satisfying the identity

$$
f(f(n, m)) \equiv(n ; m), (n ; m) \in S
$$

60
