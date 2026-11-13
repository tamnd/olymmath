---
tag: 8CH3F5R2TK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h573866
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11563
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213520
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2014
    source: hf-ai-mo-aops
    label: 2014 NIMO Problems
---
Let $P(n)$ be a polynomial of degree $m$ with integer coefficients, where $m \le 10$ . Suppose that $P(0)=0$ , $P(n)$ has $m$ distinct integer roots, and $P(n)+1$ can be factored as the product of two nonconstant polynomials with integer coefficients. Find the sum of all possible values of $P(2)$ .

*Proposed by Evan Chen*
