---
tag: 28HHB5ZF2K
kind: problem
type: answer
answer: "72"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154568
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=291
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines Philippine Mathematical Olympiad
---
Let $p$ and $q$ be positive integers such that $p q=2^{3} \cdot 5^{5} \cdot 7^{2} \cdot 11$ and $\frac{p}{q}=2 \cdot 5 \cdot 7^{2} \cdot 11$. Find the number of positive integer divisors of $p$.
