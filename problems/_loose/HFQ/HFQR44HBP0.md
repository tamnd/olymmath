---
tag: HFQR44HBP0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34109
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X=\left(X_{1}, \ldots, X_{n}\right)$ and $Y=\left(Y_{1}, \ldots, Y_{n}\right)$ be two centered Gaussian vectors

$$
\mathrm{D} X_{k}=\mathrm{D} Y_{k} \text { and } \operatorname{cov}\left(Y_{k}, Y_{l}\right) \leqslant \operatorname{cov}\left(X_{k}, X_{l}\right), 1 \leqslant k, l \leqslant n .
$$

Prove Slepian's inequality:

$$
\mathrm{P}\left(Y_{\max }<a\right) \leqslant \mathrm{P}\left(X_{\max }<a\right)
$$

for any $a \in \mathbb{R}$, where $z_{\text {max }}$ denotes $\max \left\{z_{1}, \ldots, z_{n}\right\}$.
