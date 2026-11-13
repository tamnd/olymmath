---
tag: W11PQR33AA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2553327
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39106
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236438
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1994
    source: hf-ai-mo-aops
    label: 1994 French Mathematical Olympiad
---
For each positive integer $n$ , let $I_n$ denote the number of integers $p$ for which $50^n<7^p<50^{n+1}$ .

(a) Prove that, for each $n$ , $I_n$ is either $2$ or $3$ .
(b) Prove that $I_n=3$ for infinitely many $n\in\mathbb N$ , and find at least one such $n$ .
