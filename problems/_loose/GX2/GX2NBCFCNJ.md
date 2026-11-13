---
tag: GX2NBCFCNJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218549
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. A function $f : \{1, 2, \dots, 2n\} \to \{1, 2, 3, 4, 5\}$ is *good* if $f(j+2)$ and $f(j)$ have the same parity for every $j = 1, 2, \dots, 2n-2$.
Prove that the number of good functions is a perfect square.
