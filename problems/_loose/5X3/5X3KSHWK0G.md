---
tag: 5X3KSHWK0G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3245676
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=945
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2023
    source: hf-ai-mo-aops
    label: 2023 Mongolian Mathematical Olympiad
---
Five girls and five boys took part in a competition. Suppose that we can number the boys and girls $1, 2, 3, 4, 5$ such that for each $1 \leq i,j \leq 5$ , there are exactly $|i-j|$ contestants that the girl numbered $i$ and the boy numbered $j$ both know. Let $a_i$ and $b_i$ be the number of contestants that the girl numbered $i$ knows and the number of contestants that the boy numbered $i$ knows respectively. Find the minimum value of $\max(\sum\limits_{i=1}^5a_i, \sum\limits_{i=1}^5b_i)$ .
(Note that for a pair of contestants $A$ and $B$ , $A$ knowing $B$ doesn't mean that $B$ knows $A$ and a contestant cannot know themself.)
