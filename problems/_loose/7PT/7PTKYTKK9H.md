---
tag: 7PTKYTKK9H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h42561
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35680
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1992
    source: hf-ai-mo-aops
    label: 1992 China Team Selection Test
---
For any $n,T \geq 2, n, T \in \mathbb{N}$ , find all $a \in \mathbb{N}$ such that $\forall a_i > 0, i = 1, 2, \ldots, n$ , we have

$$\sum^n_{k=1} \frac{a \cdot k + \frac{a^2}{4}}{S_k} < T^2 \cdot \sum^n_{k=1} \frac{1}{a_k},$$ where $S_k = \sum^k_{i=1} a_i.$
