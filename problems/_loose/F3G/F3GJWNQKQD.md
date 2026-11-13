---
tag: F3GJWNQKQD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179202
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 66th ROMANIAN MATHEMATICAL OLYMPIAD
---
Matrices $A \in \mathcal{M}_{m, n}(\mathbb{C}), B \in \mathcal{M}_{n, m}(\mathbb{C})$, where $m \geq n \geq 2$, have the property that there exist $k \in \mathbb{N}^{*}$ and $a_{0}, a_{1}, \ldots, a_{k} \in \mathbb{C}$ such that

$$
a_{k}(A B)^{k}+a_{k-1}(A B)^{k-1}+\cdots+a_{1}(A B)+a_{0} I_{m}=O_{m}
$$

and

$$
a_{k}(B A)^{k}+a_{k-1}(B A)^{k-1}+\cdots+a_{1}(B A)+a_{0} I_{n} \neq O_{n}
$$

Prove that $a_{0}=0$.
