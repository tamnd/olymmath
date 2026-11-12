---
tag: GT1CDHETXV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 South East Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3122574
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36667
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-smo/2023
    source: hf-ai-mo-aops
    label: 2023 South East Mathematical Olympiad
---
Given an integer $n\geq 2$ . Call a positive integer ${T}$ *Pingsheng Number*, if there exists pairwise different
non empty subsets $A_1,A_2,\cdots ,A_m$ $(m\geq 3)$ of set $S=\{1,2,\cdots ,n\},$ satisfying $T=\sum\limits_{i=1}^m|A_i|,$ and for $\forall p,q,r\in\{1,2,\cdots ,m\},p\neq q,q\neq r,r\neq p,$ we have $A_p\cap(A_q\triangle A_r)=\varnothing$ or $A_p\subseteq (A_q\triangle A_r).$ Find the max *Pingsheng Number*.
