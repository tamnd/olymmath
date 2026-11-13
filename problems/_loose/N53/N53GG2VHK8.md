---
tag: N53GG2VHK8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Czech-Polish-Slovak Match
    url: https://artofproblemsolving.com/community/c6h3101719
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22596
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223744
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caps/2023
    source: hf-ai-mo-aops
    label: 2023 Czech-Polish-Slovak Match
---
Given is an integer $n \geq 1$ and an $n \times n$ board, whose all cells are initially white. Peter the painter walks around the board and recolors the visited cells according to the following rules. Each walk of Peter starts at the bottom-left corner of the board and continues as follows:

- if he is standing on a white cell, he paints it black and moves one cell up (or walks off the board if he is in the top row);
- if he is standing on a black cell, he paints it white and moves one cell to the right (or walks off the board if he is in the rightmost column).

Peter's walk ends once he walks off the board. Determine the minimum positive integer $s$ with the following property: after exactly $s$ walks all the cells of the board will become white again.
