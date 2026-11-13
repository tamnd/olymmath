---
tag: DQQYRXJA8N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=448
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $m$, we denote by $[m]$ the set $\{1,2, \ldots, m\}$. Let $n$ be a positive integer and let $\mathcal{S}$ be a non-empty collection of subsets of $[n]$. A function $f:[n] \rightarrow [n+1]$ is called kawaii if there exists $A \in \mathcal{S}$ such that for all $B \in \mathcal{S}$ with $A \neq B$ we have
$$
\sum_{a \in A} f(a) > \sum_{b \in B} f(b)
$$
Prove that there are always at least $n^{n}$ kawaii functions, irrespective of $\mathcal{S}$.
