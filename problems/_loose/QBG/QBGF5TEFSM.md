---
tag: QBGF5TEFSM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252856
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $O$ be the circumcenter of triangle $ABC$. Define $O_{A0} = O_{B0} = O_{C0} = O$. Recursively, define $O_{An}$ to be the circumcenter of $\vartriangle BO_{A(n-1)}C$. Similarly define $O_{Bn}, O_{Cn}$. Find all $n \ge 1$ so that for any triangle $ABC$ such that $O_{An}, O_{Bn}, O_{Cn}$ all exist, it is true that $AO_{An}, BO_{Bn}, CO_{Cn}$ are concurrent.

(Li4)
