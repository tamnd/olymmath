---
tag: Y4NS8WV7VT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Flanders Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2983989
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31702
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230906
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: be-vwo/2017
    source: hf-ai-mo-aops
    label: 2017 Flanders Math Olympiad
---
For every natural number $n$ we define the derived number $n'$ as follows: $\bullet$ $0' = 1' = 0$ $\bullet$ if $n$ is prime, then $n' = 1$ $\bullet$ if $n = a \cdot b$ , then $n' = a' b + a b'$ .
For example: $15' = 3' 5 + 3 5' = 1\cdot 5 + 3\cdot 1 = 8$ .
Determine all natural numbers $n$ for which $n = n'$ .
