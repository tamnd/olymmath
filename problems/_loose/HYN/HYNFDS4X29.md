---
tag: HYNFDS4X29
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Romanian Master of Mathematics Shortlist
    url: https://artofproblemsolving.com/community/c6h3266707
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27715
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228103
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fix an integer $n \geq 2$ and let $a_1, \ldots, a_n$ be integers, where $a_1 = 1$ . Let $$ f(x) = \sum_{m=1}^n a_mm^x. $$ Suppose that $f(x) = 0$ for some $K$ consecutive positive integer values of $x$ . In terms of $n$ , determine the maximum possible value of $K$ .
