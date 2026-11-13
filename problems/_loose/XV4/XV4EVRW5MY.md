---
tag: XV4EVRW5MY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90215
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=464
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine if it is possible to color each of the rational numbers either red or blue such that the following three conditions are all satisfied:

(i) $x$ and $-x$ are opposite colors, for all rational $x \neq 0$;

(ii) $x$ and $1-x$ are opposite colors, for all rational $x \neq 1 / 2$;

(iii) $x$ and $1 / x$ are opposite colors, for all rational $x \neq 0, \pm 1$.
