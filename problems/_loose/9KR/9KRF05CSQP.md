---
tag: 9KRF05CSQP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1221777
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13778
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
For all positive integers $m\geq 1$ , denote by $\mathcal{G}_m$ the set of simple graphs with exactly $m$ edges. Find the number of pairs of integers $(m,n)$ with $1<2n\leq m\leq 100$ such that there exists a simple graph $G\in\mathcal{G}_m$ satisfying the following property: it is possible to label the edges of $G$ with labels $E_1$ , $E_2$ , $\ldots$ , $E_m$ such that for all $i\neq j$ , edges $E_i$ and $E_j$ are incident if and only if either $|i-j|\leq n$ or $|i-j|\geq m-n$ . $\textit{Note: }$ A graph is said to be $\textit{simple}$ if it has no self-loops or multiple edges. In other words, no edge connects a vertex to itself, and the number of edges connecting two distinct vertices is either $0$ or $1$ .
