---
tag: 70FCAH2SKZ
kind: problem
type: answer
answer: "946"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265860
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer $N$ is *apt* if for each integer $0 < k < 1009$, there exists exactly one divisor of $N$ with a remainder of $k$ when divided by $1009$. For a prime $p$, suppose there exists an *apt* positive integer $N$ where $\tfrac Np$ is an integer but $\tfrac N{p^2}$ is not. Find the number of possible remainders when $p$ is divided by $1009$.

*Proposed by Evan Chang*
