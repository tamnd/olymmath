---
tag: KG2KBX29AY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127491
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If positive integers $n, k$ satisfy
$$
1=\underbrace{\varphi(\varphi(\cdots \varphi(n) \cdots)}_{k \uparrow}),
$$

where $\varphi(n)$ is the Euler's function, i.e., $\varphi(n)$ is the number of elements in $\{1,2, \cdots, n\}$ that are coprime with $n$. In particular, $\varphi(1) = 1$. Prove: $n \leqslant 3^{k}$.
