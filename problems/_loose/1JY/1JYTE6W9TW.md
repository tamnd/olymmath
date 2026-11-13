---
tag: 1JYTE6W9TW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h254141
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35776
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115510
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2002
    source: hf-ai-mo-aops
    label: 2002 China Team Selection Test
---
Given that $ a_1=1$ , $ a_2=5$ , $ a_{n+1} = \frac{a_n \cdot a_{n-1}}{\sqrt{a_n^2 + a_{n-1}^2 + 1}}$ . Find a expression of the general term of $ \{ a_n \}$ .
