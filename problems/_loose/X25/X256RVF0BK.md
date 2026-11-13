---
tag: X256RVF0BK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Greece National Olympiad
    url: https://artofproblemsolving.com/community/c6h408646
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40531
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237405
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/1998
    source: hf-ai-mo-aops
    label: 1998 Greece National Olympiad
---
Let a function $g:\mathbb{N}_0\to\mathbb{N}_0$ satisfy $g(0)=0$ and $g(n)=n-g(g(n-1))$ for all $n\ge 1$ . Prove that:

a) $g(k)\ge g(k-1)$ for any positive integer $k$ .
b) There is no $k$ such that $g(k-1)=g(k)=g(k+1)$ .
