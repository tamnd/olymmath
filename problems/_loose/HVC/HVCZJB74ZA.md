---
tag: HVCZJB74ZA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178192
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=414
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2019
    source: hf-mathnet
    label: Romania 2019 ROMANIAN MATHEMATICAL OLYMPIAD
---
Let $a, b, c$ be distinct complex numbers, with the property $|a|=|b|=|c|=1$. Show that if $|a+b-c|^{2}+|b+c-a|^{2}+|c+a-b|^{2}=12$, then the points with affixes $a, b, c$ are the vertices of an equilateral triangle.
