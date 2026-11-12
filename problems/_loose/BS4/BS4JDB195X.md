---
tag: BS4JDB195X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29493
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that the sum

$$
1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+\ldots+\frac{1}{n}
$$

will exceed any predetermined number $ N $ if $ n $ is sufficiently large.

Note. The result of this problem can be significantly refined. Specifically, it can be shown that the sum $ 1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+\ldots+\frac{1}{n} $ for large $ n $ is very close to $ \log n $ (the logarithm is taken with base $ e=2.718 \ldots $). More precisely, it can be proven that for any $ n $, the difference

$$
1+\frac{1}{2}+\frac{1}{3}+\ldots+\frac{1}{n}-\log n
$$

does not exceed one (see, for example, [6]).
