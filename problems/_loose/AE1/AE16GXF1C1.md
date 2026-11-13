---
tag: AE16GXF1C1
kind: problem
type: answer
answer: a_{0}=n,a_{,k}=2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97932
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find $a_{0}, a_{l, k}(1 \leqslant l<k \leqslant n)$, such that for any $x \in \mathbf{R}(\sin x \neq 0)$, we have $\frac{\sin ^{2} n x}{\sin ^{2} x}=a_{0}+$
$$
\sum_{1 \leqslant l<k \leqslant n} a_{l, k} \cdot \cos 2(k-l) x \text {. }
$$
