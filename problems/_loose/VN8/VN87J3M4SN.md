---
tag: VN87J3M4SN
kind: problem
type: answer
answer: k<\frac{1}{2}+\sqrt{2n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79953
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a natural number. Let $S$ be a set of $n$ points in the plane such that:

- no three points of $S$ are ever on the same line
- for every point $P$ in $S$, there exists a real number $r$ such that there are at least $k$ points at distance $r$ from $P$.

Show that:

$$
k<\frac{1}{2}+\sqrt{2 n}
$$
