---
tag: ESCGP6V12M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1956 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1899517
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56811
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249708
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1956
    source: hf-ai-mo-aops
    label: 1956 Moscow Mathematical Olympiad
---
a) Find all integers that can divide both the numerator and denominator of the ratio $\frac{5m + 6}{8m + 7}$ for an integer $m$ .

b) Let $a, b, c, d, m$ be integers. Prove that if the numerator and denominator of the ratio $\frac{am + b}{cm+ d}$ are both divisible by $k$ , then so is $ad - bc$ .
