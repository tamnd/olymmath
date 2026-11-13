---
tag: MSMK525PET
kind: problem
type: answer
answer: "1010"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265325
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $\{a_n\}$ is defined such that $a_i=i$ for $i=1,2,3\ldots,2020$ and for $i>2020$, $a_i$ is the average of the previous $2020$ terms. What is the largest integer less than or equal to $ \lim_{n\to\infty}a_n$?

*2020 CCA Math Bonanza Lightning Round #4.4*
