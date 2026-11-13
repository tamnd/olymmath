---
tag: CCK8BKTYDQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267163
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $T=\text{TNFTPP}$. For natural numbers $k,n\geq 2$, we define $S(k,n)$ such that $$S(k,n)=\left\lfloor\dfrac{2^{n+1}+1}{2^{n-1}+1}\right\rfloor+\left\lfloor\dfrac{3^{n+1}+1}{3^{n-1}+1}\right\rfloor+\cdots+\left\lfloor\dfrac{k^{n+1}+1}{k^{n-1}+1}\right\rfloor.$$ Compute the value of $S(10,T+55)-S(10,55)+S(10,T-55)$.
