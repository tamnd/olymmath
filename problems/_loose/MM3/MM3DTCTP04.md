---
tag: MM3DTCTP04
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1165923
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12947
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214854
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2015
    source: hf-ai-mo-aops
    label: 2015 Princeton University Math Competition
---
Alice places down $n$ bishops on a $2015\times 2015$ chessboard such that no two bishops are attacking each other. (Bishops attack each other if they are on a diagonal.)

- Find, with proof, the maximum possible value of $n$ .

- (A1 only) For this maximal $n$ , find, with proof, the number of ways she could place her bishops on the chessboard.
