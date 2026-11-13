---
tag: VA5X0HNS3X
kind: problem
type: answer
answer: n^{k-2}\prod_{i=1}^{k}(n-a_{i})^{a_{i}-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99512
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A country has $k$ provinces, each with $a_{1}, a_{2}, \cdots, a_{k}$ cities, respectively. It is planned to establish some (two-way) air routes between these cities so that from any city, one can reach any other city through one or more air routes. If no air routes are set up between cities within the same province, and it is required that the total number of air routes be as few as possible, how many different air route design methods are there?
