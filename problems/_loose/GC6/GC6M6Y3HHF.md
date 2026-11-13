---
tag: GC6M6Y3HHF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90225
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=164
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $d$ be a fixed positive integer. Prove that there exists a unique polynomial $S(n)$ such that for every integer $n \geq 0, S(n)=\sum_{k=0}^{n} k^{d}=0^{d}+1^{d}+\cdots+n^{d}$. Also prove that $S(n)$ can be expressed in the form

$$
c_{0}+c_{1}(2 n+1)+c_{2}(2 n+2)^{2}+\cdots+c_{d+1}(2 n+1)^{d+1}
$$

where the $c_{i}$ are rational numbers such that $c_{i} c_{i+1}=0$ for $i=0,1, \ldots, d$.
