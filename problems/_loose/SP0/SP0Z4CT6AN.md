---
tag: SP0Z4CT6AN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1988 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2565595
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39078
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236410
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1988
    source: hf-ai-mo-aops
    label: 1988 French Mathematical Olympiad
---
For each $n\in\mathbb N$ , determine the sign of $n^6+5n^5\sin n+1$ . For which $n\in\mathbb N$ does it hold that $\frac{n^2+5n\cos n+1}{n^6+5n^5\sin n+1}\ge10^{-4}$ .
