---
tag: QGDY5F592S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269113
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the complex numbers $a_1, a_2,\cdots , a_n$, $n \geq 2$. Which have the following properties:

- $|a_i|=1$ $\forall$ $i=1,2,\cdots , n$

- $\sum \limits_{k=1}^n arg(a_k)\leq \pi$

Show that the inequality$$\left(n^2\cot \left(\frac{\pi}{2n}\right)\right)^{-1}\left |\sum \limits_{k=0}^n(-1)^k\left[3n^2-(8k+5)n+4k(k+1)\sigma_k\right]\right |\geq \sqrt{\left(1+\frac{1}{n}\right)^2\cot^2 \left(\frac{\pi}{2n}\right)}+16\left |\sum \limits_{k=0}^n(-1)^k\sigma_k\right |$$where $\sigma_0=1$, $\sigma_k=\sum \limits_{1\leq i_1\leq i_2\leq \cdots \leq i_k\leq n}a_{i_1}a_{i_2}\cdots a_{i_k}$, $\forall$ $k=1,2,\cdots , n$
