---
tag: PBV7VP7ZHD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Greece Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2032744
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40395
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237361
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=98
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2014
    source: hf-ai-mo-aops
    label: 2014 Greece Junior Math Olympiad
  - at: gr-hms
    source: hf-mathnet
    label: Greece 31st Hellenic Mathematical Olympiad
---
We color the numbers $1, 2, 3,....,20$ with two colors white and black in such a way that both colors are used. Find the number of ways, we can perform this coloring if the product of white numbers and the product of black numbers have greatest common divisor equal to $1$ .
