---
tag: C7JJAYH91A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266343
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A *derangement * of the letters $ABCDEF$ is a permutation of these letters so that no letter ends up in the position it began such as $BDECFA$. An *inversion * in a permutation is a pair of letters $xy$ where $x$ appears before $y$ in the original order of the letters, but $y$ appears before $x$ in the permutation. For example, the derangement $BDECFA$ has seven inversions: $AB, AC, AD, AE, AF, CD$, and $CE$. Find the total number of inversions that appear in all the derangements of $ABCDEF$.
