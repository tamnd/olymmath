---
tag: M6WAXA80QA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2378306
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19290
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220833
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
Compute the number of ordered triples of integers $(a,b,c)$ between $1$ and $12$ , inclusive, such that, if $$ q=a+\frac{1}{b}-\frac{1}{b+\frac{1}{c}}, $$ then $q$ is a positive rational number and, when $q$ is written in lowest terms, the numerator is divisible by $13$ .

*Proposed by Ankit Bisain*
