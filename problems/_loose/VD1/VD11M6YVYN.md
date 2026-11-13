---
tag: VD11M6YVYN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123451
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the set of points
$$
S=\{(x, y) \mid 1 \leqslant x, y \leqslant 2016, x, y \in \mathbf{Z}\} \text {. }
$$

Now, assign a positive integer to each point in the set $S$. Question: Is it possible to provide an assignment scheme such that three points in the set $S$ are collinear if and only if the positive integers assigned to these three points are not pairwise coprime?
