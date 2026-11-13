---
tag: B7926AHNQJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h498978
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8366
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210431
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2012
    source: hf-ai-mo-aops
    label: 2012 NIMO Problems
---
The positive integer-valued function $f(n)$ satisfies $f(f(n)) = 4n$ and $f(n + 1) > f(n) > 0$ for all positive integers $n$ . Compute the number of possible 16-tuples $(f(1), f(2), f(3), \dots, f(16))$ .

*Proposed by Lewis Chen*
