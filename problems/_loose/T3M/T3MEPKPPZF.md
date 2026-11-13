---
tag: T3MEPKPPZF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265063
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Harry wants to label the points of a regular octagon with numbers $1,2,\ldots ,8$ and label the edges with $1,2,\ldots, 8$. There are special rules he must follow:

If an edge is numbered even, then the sum of the numbers of its endpoints must also be even.
If an edge is numbered odd, then the sum of the numbers of its endpoints must also be odd.

Two octagon labelings are equivalent if they can be made equal up to rotation, but not up to reflection. If $N$ is the number of possible octagon labelings, find the remainder when $N$ is divided by $100$.

*Proposed by Harry Kim*
