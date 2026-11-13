---
tag: VHV7B37P4N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h150875
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25211
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225962
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1991
    source: hf-ai-mo-aops
    label: 1991 IMO Shortlist
---
An odd integer $ n \ge 3$ is said to be nice if and only if there is at least one permutation $ a_{1}, \cdots, a_{n}$ of $ 1, \cdots, n$ such that the $ n$ sums $ a_{1} - a_{2} + a_{3} - \cdots - a_{n - 1} + a_{n}$ , $ a_{2} - a_{3} + a_{3} - \cdots - a_{n} + a_{1}$ , $ a_{3} - a_{4} + a_{5} - \cdots - a_{1} + a_{2}$ , $ \cdots$ , $ a_{n} - a_{1} + a_{2} - \cdots - a_{n - 2} + a_{n - 1}$ are all positive. Determine the set of all `nice' integers.
