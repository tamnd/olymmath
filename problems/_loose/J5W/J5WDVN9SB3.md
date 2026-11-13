---
tag: J5WDVN9SB3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261757
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For integer $n\geq 2$ and real $0\leq p\leq 1$, define $\mathcal{W}_{n,p}$ to be the complete weighted undirected random graph with vertex set $\{1,2,\ldots,n\}$: the edge $(i,j)$ will have weight $\min(i,j)$ with probability $p$ and weight $\max(i,j)$ otherwise. Let $\mathcal{L}_{n,p}$ denote the total weight of the minimum spanning tree of $\mathcal{W}_{n,p}$. Find the largest integer less than the expected value of $\mathcal{L}_{2018,1/2}$.
