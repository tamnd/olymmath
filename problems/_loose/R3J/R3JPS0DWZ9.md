---
tag: R3JPS0DWZ9
kind: problem
type: answer
answer: "8092"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265431
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)$ be a function such that $f(1) = 1234$, $f(2)=1800$, and $f(x) = f(x-1) + 2f(x-2)-1$ for all integers $x$. Evaluate the number of divisors of
$$\sum_{i=1}^{2022}f(i)$$

*2022 CCA Math Bonanza Tiebreaker Round #4*
