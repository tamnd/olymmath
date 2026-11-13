---
tag: XRN7NR0NKW
kind: problem
type: answer
answer: "23"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267082
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\alpha$ denote $\cos^{-1}(\tfrac 23)$. The recursive sequence $a_0,a_1,a_2,\ldots$ satisfies $a_0 = 1$ and, for all positive integers $n$, $$a_n = \dfrac{\cos(n\alpha) - (a_1a_{n-1} + \cdots + a_{n-1}a_1)}{2a_0}.$$ Suppose that the series $$\sum_{k=0}^\infty\dfrac{a_k}{2^k}$$ can be expressed uniquely as $\tfrac{p\sqrt q}r$, where $p$ and $r$ are coprime positive integers and $q$ is not divisible by the square of any prime. Find the value of $p+q+r$.
