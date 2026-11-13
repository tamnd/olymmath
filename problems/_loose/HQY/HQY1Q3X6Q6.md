---
tag: HQY1Q3X6Q6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 CMIMC
    url: https://artofproblemsolving.com/community/c6h1774496
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17516
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219117
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2019
    source: hf-ai-mo-aops
    label: 2019 CMIMC
---
Let $\varphi(n)$ denotes the number of positive integers less than or equal to $n$ which are relatively prime to $n$ . Determine the number of positive integers $2\leq n\leq 50$ such that all coefficients of the polynomial
$$
\left(x^{\varphi(n)} - 1\right) - \prod_{\substack{1\leq k\leq n\gcd(k,n) = 1}}(x-k)
$$
are divisible by $n$ .
