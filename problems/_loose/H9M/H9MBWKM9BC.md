---
tag: H9MBWKM9BC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h590799
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73066
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262988
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2006
    source: hf-ai-mo-aops
    label: 2006 Princeton University Math Competition
---
The Lucas numbers $L_n$ are defined recursively as follows: $L_0=2,L_1=1,L_n=L_{n-1}+L_{n-2}$ for $n\geq2$ . Let $r=0.21347\dots$ , whose digits form the pattern of the Lucas numbers. When the numbers have multiple digits, they will "overlap," so $r=0.2134830\dots$ , **not** $0.213471118\dots$ . Express $r$ as a rational number $\frac{p}{q}$ , where $p$ and $q$ are relatively prime.
