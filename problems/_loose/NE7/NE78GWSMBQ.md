---
tag: NE78GWSMBQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1397189
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15276
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148282
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2017
    source: hf-ai-mo-aops
    label: 2017 China Team Selection Test
---
Find out all the integer pairs $(m,n)$ such that there exist two monic polynomials $P(x)$ and $Q(x)$ ,with $\deg{P}=m$ and $\deg{Q}=n$ ,satisfy that $$ P(Q(t))\not=Q(P(t)) $$ holds for any real number $t$ .
