---
tag: 3NNXW1FBR9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116951
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an $8 \times 8$ grid, each cell contains a non-zero integer, and their sum equals 0. Then, each small cell is divided into 4 smaller regions using vertical and horizontal lines. Can the numbers be filled in these smaller regions such that the following conditions are met:
(1) The numbers in the smaller regions along the edges of the grid are all 0;
(2) The sum of the 4 numbers in the 4 smaller regions of each cell equals the original number in that cell;
(3) The sum of the numbers in the 4 adjacent smaller regions around each node (the common vertex of 4 cells) equals 0?
