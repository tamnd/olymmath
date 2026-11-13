---
tag: 578NYVVRAF
kind: problem
type: answer
answer: All positive integers n greater than or equal to 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=106
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all such positive integer $n$ that for every polynomial $g(x)$ with real coefficients there exist such polynomials $p_1(x), p_2(x),..., p_n(x)$ and $q_1(x), q_2(x),..., q_n(x)$ that $g(x) = \sum_{i=1}^{n} (p_i^2(x) + q_i^3(x))$.
