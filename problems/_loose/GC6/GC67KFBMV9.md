---
tag: GC67KFBMV9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230448
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$x_1=\frac{1}{2}$ and $x_{k+1}=\frac{x_k}{x_1^2+...+x_k^2}$
Prove that $\sqrt{x_k^4+4\frac{x_{k-1}}{x_{k+1}}}$ is rational
