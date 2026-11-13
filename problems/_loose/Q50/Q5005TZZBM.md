---
tag: Q5005TZZBM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251160
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On each cell of a $2005\times2005$ chessboard, there is a marker. In each move, we are allowed to remove a marker that is a neighbor to an even number of markers (but at least one). Two markers are considered neighboring if their cells share a vertex.

(a) Find the least number $n$ of markers that we can end up with on the chessboard.
(b) If we end up with this minimum number $n$ of markers, prove that no two of them will be neighboring.
