---
tag: QF5PTK7NHM
kind: problem
type: answer
answer: "0.1745"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265376
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the sequences $x_0,x_1,x_2,\ldots$ and $y_0,y_1,y_2,\ldots$ such that $x_0=1$, $y_0=2021$, and for all nonnegative integers $n$, we have $x_{n+1}=\sqrt{x_ny_n}$ and $y_{n+1}=\frac{x_n+y_n}{2}.$ There is some constant $X$ such that as $n$ grows large, $x_n-X$ and $y_n-X$ both approach $0$. Estimate $X$.

An estimate of $E$ earns $\max(0,2-0.02|A-E|)$ points, where $A$ is the actual answer.

*2021 CCA Math Bonanza Lightning Round #5.2*
