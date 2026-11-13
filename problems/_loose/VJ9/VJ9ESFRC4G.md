---
tag: VJ9ESFRC4G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90132
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In each cell of $n \times n$ table there is an arrow pointing in one of eight principal directions (i.e. one of the following: $\rightarrow, \leftarrow, \uparrow, \downarrow, \nearrow, \searrow, \nwarrow, \swarrow$ ), in such a way that the arrows in any two adjacent cells form an angle of no more than 45 degrees, and the arrows in any two cells adjacent diagonally (i.e. sharing a vertex) form an angle of no more than 90 degrees. We start at some cell and follow the arrows (e.g. if the arrow in our cell is $\uparrow$ we move up by one, if it is $\searrow$ we move diagonally down and to the right, etc.). Prove that we will eventually escape from the table (i.e. will reach a cell on the boundary of the table where the arrow will point "out of the table").
