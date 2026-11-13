---
tag: KK2Q8BF6CM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188482
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=266
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mk-mo
    source: hf-mathnet
    label: North Macedonia Junior Macedonian Mathematical Olympiad
---
Determine all numbers $p, q$, and $r$, such that $p$ and $r$ are prime, $q$ is a positive integer, and they satisfy the equation:

$$
(p+q+r)^{2}=2 p^{2}+2 q^{2}+r^{2}
$$
