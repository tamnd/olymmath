---
tag: Q6TXR6T1PZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221778
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all functions $f:\mathbb{N}\to \mathbb{N}$ such that for all $a, b \in \mathbb{N}$ the following conditions hold:

$(i)$ $f(f(a)+b) \mid b^a-1$;
$(ii)$ $f(f(a))\geq f(a)-1$.
