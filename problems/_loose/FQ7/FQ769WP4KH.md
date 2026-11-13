---
tag: FQ769WP4KH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213132
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Polly can do the following operations on a quadratic trinomial:
1) Swapping the places of its leading coefficient and constant coefficient (swapping $a_2$ with $a_0$);
2) Substituting (changing) $x$ with $x-m$, where $m$ is an arbitrary real number;
Is it possible for Polly to get $25x^2+5x+2014$ from $6x^2+2x+1996$ with finite applications of the upper operations?
