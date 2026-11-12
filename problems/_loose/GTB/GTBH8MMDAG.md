---
tag: GTBH8MMDAG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Bulgarian Spring Math Competition
    url: https://artofproblemsolving.com/community/c6h2810694
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=64
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
A permutation $\sigma$ of the numbers $1,2,\ldots , 10$ is called $\textit{bad}$ if there exist integers $i, j, k$ which satisfy
$$1 \leq i < j < k \leq 10 \text{ and } \sigma(j) < \sigma(k) < \sigma(i)$$
and $\textit{good}$ otherwise. Find the number of $\textit{good}$ permutations.
