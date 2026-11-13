---
tag: Y96R7BAVN3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242510
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the string of length $6$ composed of three characters $a, b, c$. For each string, if two $a$s are next to each other, or two $b$s are next to each other, then replace $aa$ by $b$, and replace $bb$ by $a$. Also, if $a$ and $b$ are next to each other, or two $c$s are next to each other, remove all two of them (i.e. delete $ab, ba, cc$). Determine the number of strings that can be reduced to $c$, the string of length $1$, by the reducing processes mentioned above.
