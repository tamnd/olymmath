---
tag: H1YEP2VFJQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251226
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The table of dimensions $n\times n$, $n\in\mathbb{N}$, is filled with numbers from $1$ to $n^2$, but the difference
any two numbers on adjacent fields is at most $n$, and that for every $k = 1, 2,\dots , n^2$ set of fields
whose numbers are $1, 2,\dots , k$ is connected, as well as the set of fields whose numbers are $k, k + 1,\dots , n^2$. Neighboring fields are fields with a common side, while a set of fields is considered connected if from each field to every other field of that set can be reached going only to the neighboring fields within that set.
We call a pair of adjacent numbers, ie. numbers on adjacent fields, good, if their absolute difference is exactly $n$
(one number can be found in several good pairs). Prove that the table has at least $2 (n - 1)$ good pairs.
