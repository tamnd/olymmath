---
tag: ZC852KT2WS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161806
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given real numbers $x_{1}, x_{2}, \ldots, x_{n}$, such that $x_{1}^{2}+x_{2}^{2}+\ldots+x_{n}^{2}=1$. Prove that

$$
\sum_{\substack{1 \leqslant k \\ 1 \leqslant m \\ k \cdot m \leqslant n}} x_{k} x_{m} \leqslant 2 \sqrt{n}
$$
