---
tag: 4MF01DEDTS
kind: problem
type: answer
answer: f(kp + r) = \epsilon(r) (kp + r)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245235
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{N} \rightarrow \mathbb{Z}$ such that $|f(k)| \leq k$ for all positive integers $k$ and there is a prime number $p>2024$ which satisfies both of the following conditions:

$1)$ For all $a \in \mathbb{N}$ we have $af(a+p) = af(a)+pf(a),$
$2)$ For all $a \in \mathbb{N}$ we have $p|a^{\frac{p+1}{2}}-f(a).$

*Proposed by Nikola Velov*
