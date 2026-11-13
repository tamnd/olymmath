---
tag: FY72ZM2DJB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2520220
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48643
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244556
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2007
    source: hf-ai-mo-aops
    label: 2007 Mongolian Mathematical Olympiad
---
Let $p$ be an odd prime number. Let $g$ be a primitive root of unity modulo $p$ . Find all the values of $p$ such that the sets $A=\left\{k^2+1:1\le k\le\frac{p-1}2\right\}$ and $B=\left\{g^m:1\le m\le\frac{p-1}2\right\}$ are equal modulo $p$ .
