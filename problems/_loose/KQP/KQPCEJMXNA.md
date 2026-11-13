---
tag: KQPCEJMXNA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78001
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a strictly positive integer and let $T$ be a non-empty subset of $\{1, \ldots, n\}$. We say that a number $m$ (not necessarily an integer) is a median of $T$ if there are as many elements of $T$ less than or equal to $m$ as there are elements of $T$ greater than or equal to $m$. Finally, we say that $T$ is balanced if the average of the elements of $T$ is a median of $T$. Show that the number of non-empty balanced subsets of $\{1, \ldots, n\}$ is odd.
