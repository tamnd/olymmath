---
tag: VH15JRP9T9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=23267
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider on a grid plane such broken lines starting at the point $(0,0)$ and having vertices at points with integer coordinates, where each subsequent segment goes along the sides of the cells either upwards or to the right. Each such broken line corresponds to a worm - a figure consisting of cells of the plane that have at least one common point with this broken line. Prove that the number of worms that can be divided into two-cell dominoes in exactly $n>2$ different ways is the same as the number of natural numbers less than $n$ and coprime with $n$. (Worms are different if they consist of different sets of cells.)
