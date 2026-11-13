---
tag: 1BCPNZ400K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Bosnia And Herzegovina - Regional Olympiad
    url: https://artofproblemsolving.com/community/c6h1711866
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31863
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231049
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ba-mo/2015
    source: hf-ai-mo-aops
    label: 2015 Bosnia And Herzegovina - Regional Olympiad
---
It is given set $A=\{1,2,3,...,2n-1\}$ . From set $A$ , at least $n-1$ numbers are expelled such that: $a)$ if number $a \in A$ is expelled, and if $2a \in A$ then $2a$ must be expelled $b)$ if $a,b \in A$ are expelled, and $a+b \in A$ then $a+b$ must be also expelled
Which numbers must be expelled such that sum of numbers remaining in set stays minimal
