---
tag: EWSE4KQC73
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Cono Sur Olympiad
    url: https://artofproblemsolving.com/community/c6h420912
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22208
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223392
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cono-sur/2001
    source: hf-ai-mo-aops
    label: 2001 Cono Sur Olympiad
---
A function $g$ defined for all positive integers $n$ satisfies

- $g(1) = 1$ ;
- for all $n\ge 1$ , either $g(n+1)=g(n)+1$ or $g(n+1)=g(n)-1$ ;
- for all $n\ge 1$ , $g(3n) = g(n)$ ; and
- $g(k)=2001$ for some positive integer $k$ .

Find, with proof, the smallest possible value of $k$ .
