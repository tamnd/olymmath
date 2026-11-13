---
tag: ETH0WHJP3W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204170
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fix a set of integers $S$. An integer is *clean* if it is the sum of distinct elements of $S$ in exactly one way, and *dirty* otherwise. Prove that the set of dirty numbers is either empty or infinite.

*Note:* We consider the empty sum to equal $0$.

*Proposed by Tony Wang and Ethan Tan*
