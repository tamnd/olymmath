---
tag: FY3HE8VF6Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216395
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Japan/train/0000.parquet#row=160
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jp-jmo
    source: hf-mathnet
    label: Japan Japan Mathematical Olympiad
---
Determine all functions $f : \mathbb R \to \mathbb R$ such that $$f(f(x)- f(y)) = f(f(x)) - 2x^2f(y) + f\left(y^2\right),$$ for all reals $x, y$.
