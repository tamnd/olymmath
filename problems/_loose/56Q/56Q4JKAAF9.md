---
tag: 56Q4JKAAF9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Flanders Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2983954
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31684
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=7713
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: be-vwo/2011
    source: hf-ai-mo-aops
    label: 2011 Flanders Math Olympiad
---
Given are three numbers $a, b, c \in R-\{0\}$ . The parabola with equation $y = ax^2+bx+c$ lies above the line $y = cx$ . Prove that the parabola with equation $y = cx^2 - bx + a$ lies above the line $y = cx - b$ .
