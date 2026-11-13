---
tag: WP6CQ8B20A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269280
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_{i,j})^n_{i,j=1}$ be a real matrix such that $a_{i,i}=0$ for $i=1,2,\ldots,n$. Prove that there exists a set $\mathcal J\subset\{1,2,\ldots,n\}$ of indices such that
$$\sum_{\begin{smallmatrix}i\in\mathcal J\\j\notin\mathcal J\end{smallmatrix}}a_{i,j}+\sum_{\begin{smallmatrix}i\notin\mathcal J\\j\in\mathcal J\end{smallmatrix}}a_{i,j}\ge\frac12\sum_{i,j=1}^na_{i,j}.$$
