---
tag: 1DBWNC7PZ5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=43261
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=304
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine Ukrainian Mathematical Olympiad
---
Prove that the number $5^{n}\left(5^{n}+1\right)-6^{n}\left(3^{n}+2^{n}\right)$ is divisible by 91 for any natural $n$.
