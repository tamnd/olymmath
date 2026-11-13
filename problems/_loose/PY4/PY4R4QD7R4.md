---
tag: PY4R4QD7R4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267917
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given *Fibonacci* sequence $(F_n),$ and a positive integer $m$.
a) Prove that: there exists integers $0\le i<j\le m^2$ such that $F_i\equiv F_j (\bmod m)$ and $F_{i+1}\equiv F_{j+1}(\bmod m)$.

b) Prove that: there exists a positive integer $k$ such that $F_{n+k}\equiv F_n(\bmod m),$ for all natural numbers $n$.

**Denote $k(m)$ by the smallest positive integer satisfying $F_{n+k(m)}\equiv F_n(\bmod m),$ for all natural numbers $n$**.
c) Prove that: $k(m)$ is the smallest positive integer such that $F_{k(m)}\equiv 0(\bmod m)$ and $F_{k(m)+1}\equiv 1(\bmod m)$.

d) Given a positive integer $k$. Prove that: $F_{n+k}\equiv F_n(\bmod m)$ for all natural numbers $n$ iff $k\vdots k(m)$.
