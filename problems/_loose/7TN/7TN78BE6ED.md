---
tag: 7TN78BE6ED
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 South East Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3619375
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36687
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-smo/2025
    source: hf-ai-mo-aops
    label: 2025 South East Mathematical Olympiad
---
Given an even number $m\ge6$ .

Say a positive integer sequence $\{a_n\}_{n=1}^{m}$ satisfies property $\tau$ , if
(i) $a_1=1$ ;
(ii) $\forall 1\le k\le m-1$ , $a_{k+1}-a_k\in\{a_i\mid 1\le i\le k\}$ ;
(iii) $a_2, a_4,\,\cdots, a_m$ is an arithmetic sequence.

(1) If $\{a_n\}_{n=1}^m$ contains $2025$ , find the minimum of $m$ ;
(2) Find the total number of the sequences satisfy $\tau$ when $m=22$ .
