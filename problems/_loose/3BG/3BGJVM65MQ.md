---
tag: 3BGJVM65MQ
kind: problem
type: answer
answer: \lceil\frac{n}{k-1}\rceil
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113380
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the number line, there are $n$ bounded closed intervals, among which any $k$ intervals have two with no common points - prove that there are at least $\left[\frac{n-1}{k}\right]+1$ intervals that are pairwise disjoint.
