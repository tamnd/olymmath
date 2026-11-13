---
tag: 8QSYYW56NM
kind: problem
type: answer
answer: \left\lfloor \left( \frac{p-1}{4} \right)^2 \right\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252930
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be an arbitrary odd prime and $\sigma(n)$ for $1 \le n \le p-1$ denote the inverse of $n \pmod p$. Show that the number of pairs $(a,b) \in \{1,2,\cdots,p-1\}^2$ with $a<b$ but $\sigma(a) > \sigma(b)$ is at least $$\left \lfloor \left(\frac{p-1}{4}\right)^2 \right \rfloor$$

*usjl*
