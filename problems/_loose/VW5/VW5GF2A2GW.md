---
tag: VW5GF2A2GW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h405390
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6111
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=17445
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2011
    source: hf-ai-mo-aops
    label: 2011 All-Russian Olympiad
---
For positive integers $a>b>1$ , define
$$x_n = \frac {a^n-1}{b^n-1}$$
Find the least $d$ such that for any $a,b$ , the sequence $x_n$ does not contain $d$ consecutive prime numbers.

*V. Senderov*
