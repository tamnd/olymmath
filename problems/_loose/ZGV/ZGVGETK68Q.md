---
tag: ZGVGETK68Q
kind: problem
type: answer
answer: 1+\frac{n}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52314
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Frankin B. Given a square grid $n \times n$ where $n > 1$. A crossword is any non-empty set of its cells, and a word is any horizontal or vertical strip (a cell grid rectangle one cell wide) that is entirely composed of cells of the crossword and is not contained in any larger strip of cells of the crossword (neither horizontal nor vertical). Let $x$ be the number of words in the crossword, and $y$ the minimum number of words needed to cover the crossword. Find the maximum of the ratio $\frac{x}{y}$ for a given $n > 1$.
