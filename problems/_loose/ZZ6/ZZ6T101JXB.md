---
tag: ZZ6T101JXB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33795
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the random variable $X$ be such that $\mathrm{E} X=0$ and $\mathrm{P}(X \leqslant 1)=1$. Prove that

$$
\frac{(\mathrm{E}|X|)^{2}}{2} \leqslant-\mathrm{E} \ln (1-X)
$$
