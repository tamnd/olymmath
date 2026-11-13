---
tag: QJAJWGJNS3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1831646
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17702
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219281
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=354
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2019
    source: hf-ai-mo-aops
    label: 2019 Hong Kong TST
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong HKG TST
---
We choose 100 points in the coordinate plane. Let $N$ be the number of triples $(A,B,C)$ of distinct chosen points such that $A$ and $B$ have the same $y$ -coordinate, and $B$ and $C$ have the same $x$ -coordinate. Find the greatest value that $N$ can attain considering all possible ways to choose the points.
