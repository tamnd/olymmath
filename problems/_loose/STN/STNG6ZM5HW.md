---
tag: STNG6ZM5HW
kind: problem
type: answer
answer: f(x) = x + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268747
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f:\mathbb{N} \rightarrow \mathbb{N}$ such that for every prime number $p$ and natural number $x$,
$$\{ x,f(x),\cdots f^{p-1}(x) \} $$
is a complete residue system modulo $p$. With $f^{k+1}(x)=f(f^k(x))$ for every natural number $k$ and $f^1(x)=f(x)$.

*Proposed by IndoMathXdZ*
