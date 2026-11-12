---
tag: AJMC6FS8YJ
kind: problem
type: answer
answer: 4^{n^{2}/4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=57268
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The key to a cipher called "turning grille" is a stencil made from a square sheet of grid paper of size $n \times n$

($n$ is even). Some of the cells are cut out. One of the sides of the stencil is marked. When this stencil is placed on a clean sheet of paper in four possible ways (with the marked side up, to the right, down, and to the left), its cutouts completely cover the entire area of the square, with each cell being under a cutout exactly once. The letters of the message, which has a length of $n^{2}$, are sequentially written into the cutouts of the stencil, first placed on a clean sheet of paper with the marked side up. After filling all the cutouts of the stencil with the letters of the message, the stencil is placed in the next position, and so on. After removing the stencil, the encrypted message appears on the sheet of paper.

Find the number of different keys for any even number $n$.
