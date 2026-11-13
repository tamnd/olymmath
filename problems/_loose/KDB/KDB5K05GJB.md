---
tag: KDB5K05GJB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Croatia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2618222
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37216
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/1997
    source: hf-ai-mo-aops
    label: 1997 Croatia National Olympiad
---
Function $f$ is defined on the positive integers by $f(1)=1$ , $f(2)=2$ and $$ f(n+2)=f(n+2-f(n+1))+f(n+1-f(n))\enspace\text{for }n\ge1. $$ (a) Prove that $f(n+1)-f(n)\in\{0,1\}$ for each $n\ge1$ .
(b) Show that if $f(n)$ is odd then $f(n+1)=f(n)+1$ .
(c) For each positive integer $k$ find all $n$ for which $f(n)=2^{k-1}+1$ .
