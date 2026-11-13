---
tag: DPXCJV3NTS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1620758
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16831
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218471
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Hen Hao randomly selects two distinct squares on a standard $8\times 8$ chessboard. Given that the two squares touch (at either a vertex or a side), the probability that the two squares are the same color can be expressed in the form $\frac mn$ for relatively prime positive integers $m$ and $n$ . Find $100m+n$ .

*Proposed by James Lin
