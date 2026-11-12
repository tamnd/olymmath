---
tag: YH242EMAF7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(X, Y)$ be a Gaussian system, where $Y, X$ are random vectors (possibly of different dimensions). Prove that

$$
Z=Y-\operatorname{cov}(Y, X) \cdot(\mathrm{D} X)^{+} X \text { and } X \text { are independent. }
$$

Here, as usual, $\operatorname{cov}(Y, X)=\mathrm{E}[Y-\mathrm{E} Y][X-\mathrm{E} X]^{*}$.
