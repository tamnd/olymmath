---
tag: Q72HCW5FTK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h392378
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5960
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208109
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2010 Tournament Of Towns
---
A square board is dissected into $n^2$ rectangular cells by $n-1$ horizontal and $n-1$ vertical lines. The cells are painted alternately black and white in a chessboard pattern. One diagonal consists of $n$ black cells which are squares. Prove that the total area of all black cells is not less than the total area of all white cells.
