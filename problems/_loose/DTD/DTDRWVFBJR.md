---
tag: DTDRWVFBJR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h305159
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54496
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247996
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2002
    source: hf-ai-mo-aops
    label: 2002 Romania Team Selection Test
---
The sequence $ (a_n)$ is defined by: $ a_0=a_1=1$ and $ a_{n+1}=14a_n-a_{n-1}$ for all $ n\ge 1$ .
Prove that $ 2a_n-1$ is a perfect square for any $ n\ge 0$ .
