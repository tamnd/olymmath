---
tag: 3GAQCASNS2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111483
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $a>2,\left\{a_{n}\right\}$ is inductively defined as follows: $a_{0}=1, a_{1}=a, a_{n+1}=\left(\frac{a_{n}^{2}}{a_{n-1}^{2}}-2\right) a_{n}$. Prove: for any $k \in \mathbf{N}$, we have $\frac{1}{a_{0}}+\frac{1}{a_{1}}+\cdots+\frac{1}{a_{k}}<\frac{1}{2}\left(2+a-\sqrt{a^{2}-4}\right)$.
(IMO - 37 Shortlist)
