---
tag: W86AVKDRAS
kind: problem
type: answer
answer: 2\sum_{1}^{\sqrt{n}}[\frac{n}{x}]-[\sqrt{n}]^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124041
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n>0$, the planar region $T=\{(x, y) ; x>0, y>0, x y \leqslant n\}$, prove that the number of integer points in $T$ is equal to $2 \sum_{x=1}^{[\sqrt{n}]}\left[\frac{n}{x}\right]-[\sqrt{n}]^{2}$.
