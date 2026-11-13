---
tag: KVM9027DXM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 HKIMO Preliminary Selection Contest
    url: https://artofproblemsolving.com/community/c6h1078162
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40698
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237568
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2002
    source: hf-ai-mo-aops
    label: 2002 HKIMO Preliminary Selection Contest
---
Let $a_0=2$ and for $n\geq 1$ , $a_n=\frac{\sqrt3 a_{n-1}+1}{\sqrt3-a_{n-1}}$ . Find the value of $a_{2002}$ in the form $p+q\sqrt3$ where $p$ and $q$ are rational numbers
