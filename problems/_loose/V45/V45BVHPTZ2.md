---
tag: V45BVHPTZ2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33582
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the quantities $\eta_{1}, \ldots, \eta_{n}$ be such that $\mathrm{E} \eta_{1}=0$ and $\mathrm{E}\left(\eta_{k} \mid \eta_{1}, \ldots\right.$ $\left.\ldots, \eta_{k-1}\right)=0,1 \leqslant k \leqslant n$. Prove that the sequence $\xi=\left(\xi_{k}\right)_{1 \leqslant k \leqslant n}$,

$$
\xi_{1}=\eta_{1} \text { and } \xi_{k+1}=\sum_{i=1}^{k} f_{i}\left(\eta_{1}, \ldots, \eta_{i}\right) \eta_{i+1}, k<n,
$$

where $f_{i}\left(\eta_{1}, \ldots, \eta_{i}\right)$ are some functions, forms a martingale.
