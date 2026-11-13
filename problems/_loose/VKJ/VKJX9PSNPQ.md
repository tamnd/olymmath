---
tag: VKJX9PSNPQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1981 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h366952
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25194
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148766
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1981
    source: hf-ai-mo-aops
    label: 1981 IMO Shortlist
---
Let $\{fn\}$ be the Fibonacci sequence $\{1, 1, 2, 3, 5, \dots.\}. $ (a) Find all pairs $(a, b)$ of real numbers such that for each $n$ , $af_n +bf_{n+1}$ is a member of the sequence.

(b) Find all pairs $(u, v)$ of positive real numbers such that for each $n$ , $uf_n^2 +vf_{n+1}^2$ is a member of the sequence.
