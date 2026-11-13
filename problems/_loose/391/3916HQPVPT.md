---
tag: 3916HQPVPT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162562
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=0
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan
    source: hf-mathnet
    label: Balkan Mathematical Olympiad Balkan Mathematical Olympiad
---
Find all integer solutions of the equation

$$
3^{x}-5^{y}=z^{2}
$$
