---
tag: 12MJWH3E3X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266536
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S(n)=1\varphi(1)+2\varphi(2) \ldots +n\varphi(n)$, where $\varphi(n)$ is the number of positive integers less than or equal to $n$ that are relatively prime to $n$. (For instance $\varphi(12)=4$ and $\varphi(20)=8$.) Prove that for all $n \geq 2018$, the following inequality holds:
$$0.17n^3 \leq S(n) \leq 0.23n^3$$
