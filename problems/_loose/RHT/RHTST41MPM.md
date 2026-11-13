---
tag: RHTST41MPM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Bosnia And Herzegovina - Regional Olympiad
    url: https://artofproblemsolving.com/community/c6h1712518
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31830
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231016
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ba-mo/2013
    source: hf-ai-mo-aops
    label: 2013 Bosnia And Herzegovina - Regional Olympiad
---
Let $a$ and $b$ be real numbers from interval $\left[0,\frac{\pi}{2}\right]$ . Prove that $$ \sin^6 {a}+3\sin^2 {a}\cos^2 {b}+\cos^6 {b}=1 $$ if and only if $a=b$
