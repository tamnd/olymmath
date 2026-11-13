---
tag: 2HNJN07AYE
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268982
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let n be a non-negative integer. Define the *decimal digit product* $D(n)$ inductively as follows:

- If $n$ has a single decimal digit, then let $D(n) = n$.

- Otherwise let $D(n) = D(m)$, where $m$ is the product of the decimal digits of $n$.

Let $P_k(1)$ be the probability that $D(i) = 1$ where $i$ is chosen uniformly randomly from the set of integers between 1 and $k$ (inclusive) whose decimal digit products are not 0.

Compute $ \lim_{k\to\infty} P_k(1)$.

*proposed by the ICMC Problem Committee*
