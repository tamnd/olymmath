---
tag: 5GCWT68DHQ
kind: problem
type: answer
answer: \frac{1}{2}(3^{n+1}+(-1)^{n+1})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112873
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n$ points $P_{1}, P_{2}, \cdots, P_{n}$ are sequentially on a straight line, each point is colored one of white, red, green, blue, or purple. If for any two adjacent points $P_{i}, P_{i+1}$ $(i=1,2, \cdots, n-1)$, either these two points are the same color, or at least one of them is white, it is called a good coloring. Find the total number of good colorings.
