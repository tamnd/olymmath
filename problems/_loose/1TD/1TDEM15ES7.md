---
tag: 1TDEM15ES7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h460020
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8432
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210496
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2012
    source: hf-ai-mo-aops
    label: 2012 Online Math Open Problems
---
Let $a,b,c$ be the roots of the cubic $x^3 + 3x^2 + 5x + 7$ . Given that $P$ is a cubic polynomial such that $P(a)=b+c$ , $P(b) = c+a$ , $P(c) = a+b$ , and $P(a+b+c) = -16$ , find $P(0)$ .

*Author: Alex Zhu*
