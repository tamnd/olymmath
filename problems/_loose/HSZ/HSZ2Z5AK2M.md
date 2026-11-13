---
tag: HSZ2Z5AK2M
kind: problem
type: answer
answer: "1054"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261796
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1 < a_2 < \cdots < a_k$ denote the sequence of all positive integers between $1$ and $91$ which are relatively prime to $91$, and set $\omega = e^{2\pi i/91}$. Define $$S = \prod_{1\leq q < p\leq k}\left(\omega^{a_p} - \omega^{a_q}\right).$$ Given that $S$ is a positive integer, compute the number of positive divisors of $S$.
