---
tag: CRKF9EEHDK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2009126
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54323
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247823
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1989
    source: hf-ai-mo-aops
    label: 1989 Romania Team Selection Test
---
The sequence ( $a_n$ ) is defined by $a_1 = a_2 = 1, a_3 = 199$ and $a_{n+1} =\frac{1989+a_na_{n-1}}{a_{n-2}}$ for all $n \ge 3$ . Prove that all terms of the sequence are positive integers
