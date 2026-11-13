---
tag: ABME73DVVD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146728
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove: For any $c>0$, there exist a positive integer $n$ and a sequence of complex numbers $a_{1}, a_{2}, \cdots, a_{n}$, such that
$$
c \cdot \frac{1}{2^{n}} \sum_{\varepsilon_{1}, \varepsilon_{2}, \cdots, \varepsilon_{n}}\left|\sum_{j=1}^{n} \varepsilon_{j} a_{j}\right|<\left(\sum_{j=1}^{n}\left|a_{j}\right|^{\frac{3}{2}}\right)^{\frac{2}{3}},
$$

where, $\varepsilon_{j} \in\{-1,1\}, j=1,2, \cdots, n$.
