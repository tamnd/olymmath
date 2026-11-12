---
tag: TF7AAF5FAM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34103
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a Gaussian vector with values in $\mathbb{R}^{n}$. Prove that the matrix $\mathrm{D} X$ is singular if and only if there exists a non-zero vector $b \in \mathbb{R}^{n}$ such that $\mathrm{P}\left(X^{*} b=\mathrm{E} X^{*} b\right)=1$, where, as usual, $X^{*}=X^{\top}$.
