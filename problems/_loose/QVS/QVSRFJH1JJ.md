---
tag: QVSRFJH1JJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130990
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p_{k}(x)=1+x+\cdots+x^{k-1}, k=1,2, \cdots$, prove: for any $x \in \mathbf{R}$ and $n \in \mathbf{N}^{*}$, we have
$$
\sum_{k=1}^{n} \mathrm{C}_{n}^{k} p_{k}(x)=2^{n-1} p_{n}\left(\frac{1+x}{2}\right) .
$$
