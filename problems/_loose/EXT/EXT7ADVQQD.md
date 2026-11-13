---
tag: EXT7ADVQQD
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85546
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nl-nwo
    source: hf-mathnet
    label: Netherlands Dutch Mathematical Olympiad
---
For the second round of the Math Olympiad, 999 students are invited. Melanie prepares invitation letters in the order of participant numbers: $1,2,3, \ldots$ For some values of $n \geqslant 100$, she notices the following: the number of participant numbers from $1$ to $n$ that end in a 5 is exactly equal to the number formed by the last two digits of $n$.

For how many values of $n$ (with $100 \leqslant n<1000$) does this hold?
