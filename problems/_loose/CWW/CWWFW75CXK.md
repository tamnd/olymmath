---
tag: CWWFW75CXK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38705
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime number. Write the natural numbers $a$ and $b$ in base $p$: $a=a_{0}+a_{1} p+\ldots+a_{m} p^{m}$, $b=b_{0}+b_{1} p+\ldots+b_{m} p^{m}$. Prove that

$$
C_{b}^{a} \equiv C_{b_{0}}^{a_{0}} C_{b_{1}}^{a_{1}} \ldots C_{b_{m}}^{a_{m}}(\bmod p)
$$
