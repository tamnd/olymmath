---
tag: MBF0H8N4N9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122776
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A graph $G=(V, E)$ is called bounded if for every vertex labeling $\ell: V \rightarrow \mathbb{N}$, there exists a function $f: \mathrm{N} \rightarrow \mathrm{N}$ such that any ray in $G$ will eventually exceed the label $\ell$. (Formally, for each ray $v_{1} v_{2} \ldots$ in $G$, there exists $n_{0}$ such that for every $n>n_{0}$, $f(n)>\ell\left(v_{n}\right)$.) Prove the following statements:
(i) A ray is bounded.
(ii) Every locally finite connected graph is bounded.
(iii) A countable tree is bounded if and only if it does not contain a $\kappa_{0}$-regular tree $T_{\mathrm{N}_{0}}$ as a subdivision.
