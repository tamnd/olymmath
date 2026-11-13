---
tag: 4FVZYBRJBJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h3097384
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59420
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251560
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=113
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2023
    source: hf-ai-mo-aops
    label: 2023 Singapore Senior Math Olympiad
  - at: sg-smo
    source: hf-mathnet
    label: Singapore Singapore Mathematical Olympiad (SMO)
---
Colour a $20000\times 20000$ square grid using 2000 different colours with 1 colour in each square. Two squares are neighbours if they share a vertex. A path is a sequence of squares so that 2 successive squares are neighbours. Mark $k$ of the squares. For each unmarked square $x$ , there is exactly 1 marked square $y$ of the same colour so that $x$ and $y$ are connected by a path of squares of the same colour. For any 2 marked squares of the same colour, any path connecting them must pass through squares of all the colours. Find the maximum value of $k$ .
