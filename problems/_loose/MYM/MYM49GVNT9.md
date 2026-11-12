---
tag: MYM49GVNT9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=36967
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The number 111... 11 (100 ones) is represented as

$$
a_{0}+a_{1} \cdot 10^{1}+a_{2} \cdot 10^{2}+\ldots+a_{99} \cdot 10^{99}
$$ where $a_{0}, a_{1}, \ldots, a_{99}$ are non-negative integers, the sum of which is no more than 100. Prove that they are all equal to 1.
