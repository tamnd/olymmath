---
tag: 5GEJNZ5BEX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=346
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 75th NMO
---
Let $n \in \mathbb{N}^*$. Show that for any choice of $x_1, x_2, \dots, x_n \in \mathbb{N}^*$ such that $x_k \le k$ for all $k \in \{1, 2, \dots, n\}$ and the sum $x_1 + x_2 + \dots + x_n$ is odd, there exist $\varepsilon_1, \varepsilon_2, \dots, \varepsilon_n \in \{-1, 1\}$ such that $\sum_{k=1}^n \varepsilon_k \cdot x_k = 1$.
