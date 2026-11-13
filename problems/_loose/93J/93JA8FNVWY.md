---
tag: 93JA8FNVWY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241364
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a **ring** in the plane to be the set of points at a distance of at least $r$ and at most $R$ from a specific point $O$, where $r<R$ are positive real numbers. Rings are determined by the three parameters $(O, R, r)$. The area of a ring is labeled $S$. A point in the plane for which both its coordinates are integers is called an integer point.

**a)** For each positive integer $n$, show that there exists a ring not containing any integer point, for which $S>3n$ and $R<2^{2^n}$.

**b)** Show that each ring satisfying $100\cdot R<S^2$ contains an integer point.
