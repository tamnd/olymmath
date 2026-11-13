---
tag: C9DXKT5XC8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 ELMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3100565
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69330
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260353
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2023
    source: hf-ai-mo-aops
    label: 2023 ELMO Shortlist
---
Let $n$ be a positive integer and consider an $n\times n$ square grid. For $1\le k\le n$, a *python* of length $k$ is a snake that occupies $k$ consecutive cells in a single row, and no other cells. Similarly, an *anaconda* of length $k$ is a snake that occupies $k$ consecutive cells in a single column, and no other cells.

The grid contains at least one python or anaconda, and it satisfies the following properties:
- No cell is occupied by multiple snakes.
- If a cell in the grid is immediately to the left or immediately to the right of a python, then that cell must be occupied by an anaconda.
- If a cell in the grid is immediately to above or immediately below an anaconda, then that cell must be occupied by a python.

Prove that the sum of the squares of the lengths of the snakes is at least $n^2$.

*Proposed by Linus Tang*
