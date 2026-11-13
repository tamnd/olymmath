---
tag: DS4HWC84W2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98461
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=225
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tr-mo
    source: hf-mathnet
    label: Turkey 26th Turkish Mathematical Olympiad
---
Given that there are 2018 distinguishable boxes on the table. The writer and the braggart take turns writing pairs of boxes on the table (each pair can be written at most once), with the writer starting the operation. When 4032 pairs are written on the table, the game ends. The braggart will number the box pairs as $1,2, \cdots, 4032$. For each $k=1,2, \cdots, 4032$, he places $k$ balls in each of the two boxes numbered $k$. Question: Can the braggart ensure that the number of balls in any two boxes is different?
