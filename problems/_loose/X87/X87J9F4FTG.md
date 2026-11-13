---
tag: X87J9F4FTG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2215217
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54956
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230385
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2019
    source: hf-ai-mo-aops
    label: 2019 239 Open Mathematical Olympiad
---
A $20 \times 20$ treasure map is glued to a torus. A treasure is hidden in a cell of this map. We can ask questions about $1\times 4$ or $4 \times 1$ rectangles so that we find out if there is a treasure in this rectangle or not. The answers to all questions are absolutely true, but they are given only after all rectangles we want to ask are set. What is the least amount of questions needed to be asked so that we can be sure to find the treasure? (If you describe the position of the cells in a torus with numbers $(i, j)$ of row and column, $1 \leq i, j \leq 20$ , then two cells are neighbors, if and only if two of the coordinates they have are the same, and the other two differ by $1$ mod $20$ .)
