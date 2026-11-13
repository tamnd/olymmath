---
tag: B0JN8YVZWK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143034
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $D_{n, k}$ denote the number of permutations of $n$ distinct elements $a_{1}, a_{2}, \cdots, a_{n}$ that have exactly $k(0 \leqslant k \leqslant n)$ elements in their original positions, and let $D_{n}(t)=\sum_{k=0}^{n} D_{n, k} t^{k}$. Prove:
(1) $D_{n, k}=\frac{n!}{k!} \sum_{j=0}^{n-k}(-1)^{j} / j!$.
(2) $D_{n}(t)=n!\sum_{k=0}^{n}(t-1)^{k} / k!$.
(3) $D_{n}(t)=n D_{n-1}(t)+(t-1)^{n}$.
