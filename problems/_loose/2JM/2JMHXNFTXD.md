---
tag: 2JMHXNFTXD
kind: problem
type: answer
answer: \frac{12n}{n^{2}-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140810
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 2$ be a given positive integer. Find the largest $\lambda=\lambda(n)$ such that $\lambda \cdot \max _{1 \leq k \leq n}\left|z_{k}\right|^{2} \leq$ $\sum_{\mathrm{k}=1}^{\mathrm{n}}\left|\mathrm{z}_{\mathrm{k}+1}-\mathrm{z}_{\mathrm{k}}\right|^{2}$ holds for any complex numbers $\mathrm{z}_{1}, \mathrm{z}_{2}, \ldots, \mathrm{z}_{\mathrm{n}}$ satisfying $\sum_{\mathrm{k}=1}^{\mathrm{n}} \mathrm{z}_{\mathrm{k}}=0$, where $\mathrm{z}_{\mathrm{n}+1}=\mathrm{z}_{1}$.
