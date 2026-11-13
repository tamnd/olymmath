---
tag: 1JTM8CPCHB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251002
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=212
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$\vartriangle ABC$ is a triangle, $M$ the midpoint of $BC, D$ the projection of $M$ on $AC$ and $E$ the midppoint of $MD$. Prove that the lines $AE,BD$ are orthogonal if and only if $AB = AC$.
