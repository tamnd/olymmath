---
tag: VTV64QWT5P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144188
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the function $f: \mathbf{R} \rightarrow \mathbf{R}$ satisfy
$$
f(f(x))=x f(x)+a(a \in \mathbf{Z}) \text {. }
$$

Prove: There exists $\beta \in \mathbf{R}$, such that $f(\beta)=0$ if and only if $\sum_{k=1}^{n} k^{3} \mid a$, where $n \in \mathbf{Z}_{+}$.
