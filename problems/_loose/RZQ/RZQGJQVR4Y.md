---
tag: RZQGJQVR4Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1620753
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16827
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218467
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Let $P(x)$ be a polynomial of degree at most $2018$ such that $P(i)=\binom{2018}i$ for all integer $i$ such that $0\le i\le 2018$ . Find the largest nonnegative integer $n$ such that $2^n\mid P(2020)$ .

*Proposed by Michael Ren
