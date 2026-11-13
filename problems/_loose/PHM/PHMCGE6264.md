---
tag: PHMCGE6264
kind: problem
type: answer
answer: "996"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154453
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=113
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 21st PMO Area Stage
---
For a positive integer $n$, let $\varphi(n)$ denote the number of positive integers less than and relatively prime to $n$. Let $S_{k}=\sum_{n} \frac{\varphi(n)}{n}$, where $n$ runs through all positive divisors of $42^{k}$. Find the largest positive integer $k<1000$ such that $S_{k}$ is an integer.
