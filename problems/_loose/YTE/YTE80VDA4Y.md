---
tag: YTE80VDA4Y
kind: problem
type: answer
answer: \left\lceil \frac{n}{2} \right\rceil
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245233
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a fixed positive integer and fix a point $O$ in the plane. There are $n$ lines drawn passing through the point $O$. Determine the largest $k$ (depending on $n$) such that we can always color $k$ of the $n$ lines red in such a way that no two red lines are perpendicular to each other.

*Proposed by Nikola Velov*
