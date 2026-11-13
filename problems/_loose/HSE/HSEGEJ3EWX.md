---
tag: HSEGEJ3EWX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94267
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $m$ and $n$. Each cell of an $m \times n$ grid is colored either black or white. A $2 \times 2$ grid with the top-right cell removed is called an "L-shape" (rotations and reflections are not allowed). It is known that the number of L-shapes with all three cells white is at least $\frac{mn}{3}$. Prove that there must be a $2 \times 2$ grid in the table where all four cells are white.
