---
tag: Z5TD5RP1YD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269231
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $u_1,u_2,\ldots,u_n\in C([0,1]^n)$ be nonnegative and continuous functions, and let $u_j$ do not depend on the $j$-th variable for $j=1,\ldots,n$. Show that
$$\left(\int_{[0,1]^n}\prod_{j=1}^nu_j\right)^{n-1}\le\prod_{j=1}^n\int_{[0,1]^n}u_j^{n-1}.$$
