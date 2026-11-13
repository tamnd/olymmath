---
tag: VB5DJ375ZD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2553330
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39109
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236441
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
Assume $f:\mathbb N_0\to\mathbb N_0$ is a function such that $f(1)>0$ and, for any nonnegative integers $m$ and $n$ , $$ f\left(m^2+n^2\right)=f(m)^2+f(n)^2. $$ (a) Calculate $f(k)$ for $0\le k\le12$ .
(b) Calculate $f(n)$ for any natural number $n$ .
