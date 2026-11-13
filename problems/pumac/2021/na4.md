---
tag: KV449RB8VK
kind: problem
appearances:
  - at: pumac/2021/na4
    primary: true
  - at: pumac/2021/nb6
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PuMaC_Number_Theory_A_2021-1.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2834926
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73322
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263243
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(n) = \sum_{gcd(k,n)=1,1\le k\le n}k^3$ . If the prime factorization of $f(2020)$ can be written as $p^{e_1}_1 p^{e_2}_2 ... p^{e_k}_k$ , find $\sum^k_{i=1} p_ie_i$ .
