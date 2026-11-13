---
tag: N6YMM5PR19
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h460002
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8414
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210478
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
An integer $x$ is selected at random between 1 and $2011!$ inclusive. The probability that $x^x - 1$ is divisible by $2011$ can be expressed in the form $\frac{m}{n}$ , where $m$ and $n$ are relatively prime positive integers. Find $m$ .

*Author: Alex Zhu*
