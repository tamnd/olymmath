---
tag: JQZC3CE6WC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263867
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We define the number $s$ as
$$s=\sum^{\infty}_{i=1} \dfrac{1}{10^i-1}=\dfrac{1}{9}+\dfrac{1}{99}+\dfrac{1}{999}+\dfrac{1}{9999}+\ldots=0.12232424...$$
We can determine the $n$th digit right of the decimal point of $s$ without summing the entire infinite series because after summing the first $n$ terms of the series, the rest of the series sums to less than $\dfrac{2}{10^{n+1}}$. Determine the smallest prime number $p$ for which the $p$th digit right of the decimal point of $s$ is greater than 2. Justify your answer.
