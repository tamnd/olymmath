---
tag: 1WPEFKF2NB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93855
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The 51st problem: Given positive integers $m$ and $n$, it is known that $0 < a_{1,1} \leq a_{1,2} \leq \cdots \leq a_{1, n} \leq a_{2,1} \leq a_{2,2} \leq \cdots \leq$ $a_{2, n} \leq \cdots \leq a_{m, 1} \leq a_{m, 2} \leq \cdots \leq a_{m, n}$. Prove: $\left(\sum_{\substack{1 \leq i \leq m \\ 1 \leq j}} a_{i, j}\right)^{m} \geq m^{m} n^{m-1}\left(\sum_{i=1}^{n} a_{1, i} a_{2, i} \ldots a_{m, i}\right)$.
