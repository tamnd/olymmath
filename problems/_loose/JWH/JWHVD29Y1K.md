---
tag: JWHVD29Y1K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20138
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a $100 \times 100$ grid. Each cell of the grid is painted in one of two colors: white or black. We call a coloring of the grid balanced if each row and each column contains 50 white and 50 black cells. In one operation, it is allowed to choose two rows and two columns such that out of the 4 cells at their intersections, two are black and two are white, and repaint each of these 4 cells in the opposite color. Prove that from any balanced coloring, any other balanced coloring can be obtained using the specified operations.
