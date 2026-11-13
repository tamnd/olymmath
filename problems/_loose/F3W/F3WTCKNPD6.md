---
tag: F3WTCKNPD6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100028
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If an $n$-order graph $G$ does not contain $K_{k}$, then the maximum number of edges in graph $G$ is:
$$
M(n, k)=\frac{k-2}{k-1} \cdot \frac{n^{2}-r^{2}}{2}+C_{r}^{2},
$$

where $r \equiv n(\bmod k-1)$, and $0 \leqslant r \leqslant k-2$.
