---
tag: 7SEZXH1F01
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h3291400
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54201
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=326
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2024
    source: hf-ai-mo-aops
    label: 2024 Romania National Olympiad
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 74th Romanian Mathematical Olympiad
---
Let $\mathbb{L}$ be a finite field with $q$ elements. Prove that:

a) If $q \equiv 3 \pmod 4$ and $n \ge 2$ is a positive integer divisible by $q-1,$ then $x^n=(x^2+1)^n$ for all $x \in \mathbb{L}^{\times}.$ b) If there exists a positive integer $n \ge 2$ such that $x^n=(x^2+1)^n$ for all $x \in \mathbb{L}^{\times},$ then $q \equiv 3 \pmod 4$ and $q-1$ divides $n.$
