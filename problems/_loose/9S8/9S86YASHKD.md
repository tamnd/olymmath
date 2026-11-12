---
tag: 9S86YASHKD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h3307328
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2192
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2024
    source: hf-ai-mo-aops
    label: 2024 Taiwan TST Round 3
---
For each positive integer $k$ , define $r(k)$ as the number of runs of $k$ in base- $2$ , where a run is a collection of consecutive $0$ s or consecutive $1$ s without a larger one containing it. For example, $(11100100)_2$ has $4$ runs, namely $111-00-1-00$ . Also, $r(0) = 0$ . Given a positive integer $n$ , find all functions $f : \mathbb{Z} \rightarrow\mathbb{Z}$ such that
$$\sum_{k=0}^{2^n-1} 2^{r(k)}f(k+(-1)^{k} x)=(-1)^{x+n}\text{ for all integer $x$ .}$$

*Proposed by YaWNeeT*
