---
tag: EFKVYADM8E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161703
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=24
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rmm
    source: hf-mathnet
    label: Romania Romanian Master of Mathematics
---
For an integer $n>1$, let $\operatorname{gpf}(n)$ denote the greatest prime factor of $n$. A strange pair is an unordered pair of distinct primes $p$ and $q$ such that $\{p, q\}=\{\operatorname{gpf}(n), \operatorname{gpf}(n+1)\}$ for no integer $n>1$. Prove that there exist infinitely many strange pairs.

Russia, DmitrY KRachun
