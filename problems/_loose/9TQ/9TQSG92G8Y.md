---
tag: 9TQSG92G8Y
kind: problem
type: answer
answer: "1944"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207415
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every positive integer $n$, define $S_n$ to be the sum
$$
S_n = \sum_{k = 1}^{2010} \left( \cos \frac{k! \pi}{2010} \right)^n .
$$
As $n$ approaches infinity, what value does $S_n$ approach?
