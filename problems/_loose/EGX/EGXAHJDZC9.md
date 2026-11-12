---
tag: EGXAHJDZC9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3528594
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35741
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2001
    source: hf-ai-mo-aops
    label: 2001 China Team Selection Test
---
Given distinct positive integers $ g $ and $ h $, let all integer points on the number line $ OX $ be vertices. Define a directed graph $ G $ as follows: for any integer point $ x $, $ x \rightarrow x + g $, $ x \rightarrow x - h $. For integers $ k, l (k < l) $, let $ G[k, l] $ denote the subgraph of $ G $ with vertices limited to the interval $[k, l]$. Find the largest positive integer $ \alpha $ such that for any integer $ r $, the subgraph $ G[r, r + \alpha - 1] $ of $ G $ is acyclic. Clarify the structure of subgraphs $ G[r, r + \alpha - 1] $ and $ G[r, r + \alpha] $ (i.e., how many connected components and what each component is like).
