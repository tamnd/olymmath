---
tag: X86CWKV3E3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267921
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given *Fibonacci* sequence $(F_n),$ and a positive integer $m$, denote $k(m)$ by the smallest positive integer satisfying $F_{n+k(m)}\equiv F_n(\bmod m),$ for all natural numbers $n$, $s$ is a positive integer. Prove that:
a) ${F_{{{3.2}^{s - 1}}}} \equiv 0(\bmod {2^s})$ and ${F_{{{3.2}^{s - 1}} + 1}} \equiv 1(\bmod {2^s}).$
b) $k({2^s}) = {3.2^{s - 1}}.$
