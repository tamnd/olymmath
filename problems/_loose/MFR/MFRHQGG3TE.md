---
tag: MFRHQGG3TE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1986 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h37421
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35636
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234157
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1986
    source: hf-ai-mo-aops
    label: 1986 China Team Selection Test
---
Let $x_i,$ $1 \leq i \leq n$ be real numbers with $n \geq 3.$ Let $p$ and $q$ be their symmetric sum of degree $1$ and $2$ respectively. Prove that:

i) $p^2 \cdot \frac{n-1}{n}-2q \geq 0$

ii) $\left|x_i - \frac{p}{n}\right| \leq \sqrt{p^2 - \frac{2nq}{n-1}} \cdot \frac{n-1}{n}$ for every meaningful $i$ .
