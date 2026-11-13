---
tag: BNZ7WN30T6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Abels Math Contest (Norwegian MO) Final
    url: https://artofproblemsolving.com/community/c6h2576578
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19731
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2021
    source: hf-ai-mo-aops
    label: 2021 Abels Math Contest (Norwegian MO) Final
---
We say that a set $S$ of natural numbers is *synchronous* provided that the digits of $a^2$ are the same (in occurence and numbers, if differently ordered) for all numbers $a$ in $S$ . For example, $\{13, 14, 31\}$ is synchronous, since we find $\{13^2, 14^2, 31^2\} = \{169, 196, 961\}$ . But $\{119, 121\}$ is not synchronous, for even though $119^2 = 14161$ and $121^2 = 14641$ have the same digits, they occur in different numbers. Show that there exists a synchronous set containing $2021$ different natural numbers.
