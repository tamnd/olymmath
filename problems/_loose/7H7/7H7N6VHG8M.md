---
tag: 7H7N6VHG8M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1077918
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78523
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267370
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
For a positive integer $n$ let $n\#$ denote the product of all primes less than or equal to $n$ (or $1$ if there are no such primes), and let $F(n)$ denote the largest integer $k$ for which $k\#$ divides $n$ . Find the remainder when $F(1) + F(2) +F(3) + \dots + F(2015\#-1) + F(2015\#)$ is divided by $3999991$ .

*Proposed by Evan Chen*
