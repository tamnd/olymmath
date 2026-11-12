---
tag: FWFYN6JE7R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34040
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X=\left(X_{1}, \ldots, X_{n}\right)$ and $\mathrm{E}\|X\|^{n}<\infty$, where $\|X\|=\sqrt{\sum X_{i}^{2}}$. Show that

$$
\varphi(t)=\mathrm{E} e^{i(t, X)}=\sum_{k=0}^{n} \frac{i^{k} \mathrm{E}(t, X)^{k}}{k!}+o(1) \cdot\|t\|^{n}, \|t\| \rightarrow 0
$$

where $t \in \mathbb{R}^{n}$.
