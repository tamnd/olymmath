---
tag: 91SGYGCM9Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247457
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=184
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider $n$ weights, $n \ge 2$, of masses $m_1, m_2, ..., m_n$, where $m_k$ are positive integers such that $1 \le m_ k \le k$ for all $k \in \{1,2,...,n\} $: Prove that we can place the weights on the two pans of a balance such that the pans stay in equilibrium if and only if the number $m_1 + m_2 + ...+ m_n$ is even.

Estonian Olympiad
