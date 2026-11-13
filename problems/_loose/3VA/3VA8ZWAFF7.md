---
tag: 3VA8ZWAFF7
kind: problem
type: answer
answer: "31"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265863
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $K > 0$ be an integer. An integer $k \in [0,K]$ is randomly chosen. A sequence of integers is defined starting on $k$ and ending on $0$, where each nonzero term $t$ is followed by $t$ minus the largest Lucas number not exceeding $t$.

The probability that $4$, $5$, or $6$ is in this sequence approaches $\tfrac{a - b \sqrt c}{d}$ for arbitrarily large $K$, where $a$, $b$, $c$, $d$, are positive integers, $\gcd(a,b,d) = 1$, and $c$ is squarefree. Find $a + b + c + d$.

*(Lucas numbers are defined as the members of the infinite integer sequence $2$, $1$, $3$, $4$, $7$, $\ldots$ where each term is the sum of the two before it.)*

*Proposed by Evan Chang*
