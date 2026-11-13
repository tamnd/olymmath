---
tag: BHCSXA4S4T
kind: problem
type: answer
answer: 2\sum_{i=0}^{k-1}\mathrm{C}_{n}^{i}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140935
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Mr. Alex plays the following game: At the beginning, there are nine empty boxes arranged in a row. Each operation, Alex chooses one of the following two situations:
(1) Choose any number of the form $2^{j}(j \in \mathbf{N})$ and place this number in an empty box;
(2) Choose two boxes that contain the same number (they do not need to be adjacent), let this number be $2^{j}(j \in \mathbf{N})$, then replace $2^{j}$ with $2^{j+1}$ in one of the boxes, and remove $2^{j}$ from the other box.

The game ends when one box contains the number $2^{n}(n$ is a given positive integer), and the other boxes are empty. Find the maximum number of operations Alex can perform (expressed in terms of $n$).
