---
tag: 4D9WPGG47D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218111
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=255
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2018
    source: hf-mathnet
    label: Romania 2018 Romanian Mathematical Olympiad
---
Let $f:\mathbb{R} \to\mathbb{R}$ be a function. For every $a\in\mathbb{Z}$ consider the function $f_a : \mathbb{R} \to\mathbb{R}$, $f_a(x) = (x - a)f(x)$. Prove that if there exist infinitely many values $a\in\mathbb{Z}$ for which the functions $f_a$ are increasing, then the function $f$ is monotonic.
