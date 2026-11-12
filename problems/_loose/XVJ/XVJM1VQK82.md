---
tag: XVJM1VQK82
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Morocco TST
    url: https://artofproblemsolving.com/community/c6h1079232
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48658
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ma-tst/2010
    source: hf-ai-mo-aops
    label: 2010 Morocco TST
---
Let $G$ be a non-empty set of non-constant functions $f$ such that $f(x)=ax + b$ (where $a$ and $b$ are two reals) and satisfying the following conditions:
1) if $f \in G$ and $g \in G$ then $gof \in G$ ,
2) if $f \in G$ then $f^ {-1} \in G$ ,
3) for all $f \in G$ there exists $x_f \in \mathbb{R}$ such that $f(x_f)=x_f$ .
Prove that there is a real $k$ such that for all $f \in G$ we have $f(k)=k$
