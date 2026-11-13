---
tag: Q7MFJZRVMS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91150
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo
    source: hf-mathnet
    label: Switzerland SMO Finalrunde
---
Let $n \geq 1$ be a natural number. Determine all positive integer solutions of the equation

$$
7 \cdot 4^{n}=a^{2}+b^{2}+c^{2}+d^{2}
$$
