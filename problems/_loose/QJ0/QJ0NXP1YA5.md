---
tag: QJ0NXP1YA5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Bulgarian Spring Math Competition
    url: https://artofproblemsolving.com/community/c6h2810684
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-spring/2022
    source: hf-ai-mo-aops
    label: 2022 Bulgarian Spring Math Competition
---
Let $p = (a_{1}, a_{2}, \ldots , a_{12})$ be a permutation of $1, 2, \ldots, 12$ .
We will denote $$S_{p} = |a_{1}-a_{2}|+|a_{2}-a_{3}|+\ldots+|a_{11}-a_{12}|$$We'll call $p$ $\textit{optimistic}$ if $a_{i} > \min(a_{i-1}, a_{i+1})$ $\forall i = 2, \ldots, 11$ . $a)$ What is the maximum possible value of $S_{p}$ . How many permutations $p$ achieve this maximum? $\newline$ $b)$ What is the number of $\textit{optimistic}$ permtations $p$ ? $c)$ What is the maximum possible value of $S_{p}$ for an $\textit{optimistic}$ $p$ ? How many $\textit{optimistic}$ permutations $p$ achieve this maximum?
