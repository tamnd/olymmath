---
tag: PQZGWJEC98
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180189
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=293
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 64th Romanian Mathematical Olympiad - Final Round
---
Let $A$ be a non-invertible matrix of order $n$ with real elements, $n \geq 2$, and let $A^{*}$ be the adjugate matrix of $A$. Show that $\operatorname{tr}\left(A^{*}\right) \neq-1$ if and only if the matrix $I_{n}+A^{*}$ is invertible.
