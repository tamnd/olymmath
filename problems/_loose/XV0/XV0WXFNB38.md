---
tag: XV0WXFNB38
kind: problem
type: answer
answer: 1995^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55167
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The numerical sequence $a_{0}, a_{1}, a_{2}$, is such that for all non-negative $m$ and $n (m \geq n)$, the following relation holds:

$$
a_{m+n}+a_{m-n}=\frac{\mathbf{1}}{\mathbf{2}}(a_{2m}+a_{2n})
$$

Find $a_{1995}$, if $a_{1}=1$.
