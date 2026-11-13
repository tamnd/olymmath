---
tag: FF7RMHTP5Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h3043881
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74122
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263608
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2022
    source: hf-ai-mo-aops
    label: 2022 Stanford Mathematics Tournament
---
Five lilypads lie in a line on a pond. At first, a frog sits on the third lilypad. Then, each minute there is a $\tfrac{1}{2}$ probability that the frog jumps to the lilypad to its left and $\tfrac{1}{2}$ probability that it jumps to its right. If the frog jumps to the left from the leftmost lilypad or right from the rightmost lilypad, it will fall in the pond and stay there forever. Compute the probability that the frog is not in the pond after $14$ minutes have passed.
