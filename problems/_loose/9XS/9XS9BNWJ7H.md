---
tag: 9XS9BNWJ7H
kind: problem
type: answer
answer: (11^{k},0,2k)or(0,11^{k},2k)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80459
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be an odd prime number. What values can $a^{\frac{p-1}{2}}$ take modulo $p$ (with $a$ and $p$ coprime)?
2) Can you find a relationship between the value taken and whether $a$ is a square modulo $p$? It turns out that this is an equivalence (not very easy to show).
3) Show that -1 is a square modulo $p$ if and only if $p \equiv 1(\bmod 4)$
4) Solve $11^{n}=a^{2}+b^{2}$ for $a, b \in \mathbf{N}$
