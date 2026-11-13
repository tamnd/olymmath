---
tag: 19XST8YA5K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Austria Beginners' Competition
    url: https://artofproblemsolving.com/community/c6h1673488
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30292
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190997
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Austria/train/0000.parquet#row=92
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: at-oemo-beg/2015
    source: hf-ai-mo-aops
    label: 2015 Austria Beginners' Competition
  - at: at-oemo
    source: hf-mathnet
    label: Austria Austrian Mathematical Olympiad
---
Anton chooses as starting number an integer $n \ge 0$ which is not a square. Berta adds to this number its successor $n+1$ . If this sum is a perfect square, she has won. Otherwise, Anton adds to this sum, the subsequent number $n+2$ . If this sum is a perfect square, he has won. Otherwise, it is again Berta's turn and she adds the subsequent number $n+3$ , and so on.

Prove that there are infinitely many starting numbers, leading to Anton's win.

(Richard Henner)
