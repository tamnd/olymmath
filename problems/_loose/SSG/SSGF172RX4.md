---
tag: SSGF172RX4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266986
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a mathematical version of baseball, the umpire chooses a positive integer $m$, $m \leq n$, and you guess positive integers to obtain information about $m$. If your guess is smaller than the umpire's $m$, he calls it a "ball"; if it is greater than or equal to $m$, he calls it a "strike." To "hit" it you must state the the correct value of $m$ after the 3rd strike or the 6th guess, whichever comes first. What is the largest $n$ so that there exists a strategy that will allow you to bat 1.000, i.e. always state $m$ correctly? Describe your strategy in detail.
