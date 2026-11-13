---
tag: TJY3J7HVYJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265919
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a $100 \times 100$ square grid $G$. Initially color all cells of $G$ white. A move consists of selecting a $1 \times 7$ or $7 \times 1$ subgrid of $G$ and flipping the colors of all cells in this subgrid from white to black or vice versa. Is it possible that after a series of moves, all cells are colored black?

*Proposed by Evan Chang (squareman), USA*
