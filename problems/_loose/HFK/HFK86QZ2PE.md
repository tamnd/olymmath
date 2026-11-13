---
tag: HFK86QZ2PE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265418
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the sum of all positive integers $n<100$ satisfying the following expression. $$\sum_{k=0}^{\lfloor{\log_{10} n}\rfloor}\frac{1}{10^k}\left(n (\bmod \;{10^{k+1})}-n \;(\bmod \;{10^k)}\right)=\prod_{k=0}^{\lfloor{\log_{10} n}\rfloor}\frac{1}{10^k}\left(n (\bmod 10^{k+1})-n \;(\bmod 10^k)\right).$$ Here, $ \sum$ and $ \prod$ represent sum and product, respectively.

*2022 CCA Math Bonanza Lightning Round 3.3*
