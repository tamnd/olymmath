---
tag: YS37EFTXW7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h3540537
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54220
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=431
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2025
    source: hf-ai-mo-aops
    label: 2025 Romania National Olympiad
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 75th Romanian Mathematical Olympiad
---
Define the functions $g_k \colon \mathbb{Z} \to \mathbb{Z}$ , $g_k(x) = x^k$ , where $k$ is a positive integer.
Find the set $M_k$ of positive integers $n$ for which there exist injective functions $f_1,f_2, \dots ,f_n \colon \mathbb{Z} \to \mathbb{Z}$ such that $g_k=f_1\cdot f_2 \cdot \ldots \cdot f_n$ .
(Here, $\cdot$ denotes component-wise function multiplication)
