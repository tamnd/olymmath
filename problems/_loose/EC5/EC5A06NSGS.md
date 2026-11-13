---
tag: EC5A06NSGS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2199769
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18983
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220506
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=307
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2020
    source: hf-ai-mo-aops
    label: 2020 Irish Math Olympiad
  - at: ie-irmo/2020
    source: hf-mathnet
    label: Ireland IRL_ABooklet_2020
---
A trapezium $A B C D,$ in which $A B$ is parallel to $D C,$ is inscribed in a circle of radius $R$ and centre $O .$ The non-parallel sides $D A$ and $C B$ are extended to meet at $P$ while diagonals $A C$ and $B D$ intersect at $E .$ Prove that $|O E| \cdot|O P|=R^{2}$ .
