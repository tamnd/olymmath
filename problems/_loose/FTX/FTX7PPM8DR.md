---
tag: FTX7PPM8DR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266493
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of sequences of 10 letters where all the letters are either $A$ or $B$, the first letter is $A$, the last letter is $B$, and the sequence contains no three consecutive letters reading $ABA$. For example, count $AAABBABBAB$ and $ABBBBBBBAB$ but not $AABBAABABB$ or $AAAABBBBBA$.
