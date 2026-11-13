---
tag: KVM3CRVMGP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Let $a$ be an integer such that $\gcd (a,n)=1$. Prove that
$$\frac{a^{\phi (n)}-1}{n}=\sum_{i\in R}\frac{1}{ai}\left[\frac{ai}{n}\right]\pmod{n}$$
where $R$ is the reduced residue system of $n$ with each element a positive integer at most $n$.
