---
tag: 7PT3N7HW3D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h460010
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8422
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210486
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2012
    source: hf-ai-mo-aops
    label: 2012 Online Math Open Problems
---
Let $s(n)$ be the number of 1's in the binary representation of $n$ . Find the number of ordered pairs of integers $(a,b)$ with $0 \leq a < 64, 0 \leq b < 64$ and $s(a+b) = s(a) + s(b) - 1$ .

*Author:Anderson Wang*
