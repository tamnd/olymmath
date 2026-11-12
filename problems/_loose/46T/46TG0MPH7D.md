---
tag: 46TG0MPH7D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 China National Olympiad
    url: https://artofproblemsolving.com/community/c6h3451735
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2546
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo/2025
    source: hf-ai-mo-aops
    label: 2025 China National Olympiad
---
Let $\alpha > 1$ be an irrational number and $L$ be a integer such that $L > \frac{\alpha^2}{\alpha - 1}$ . A sequence $x_1, x_2, \cdots$ satisfies that $x_1 > L$ and for all positive integers $n$ , $$ x_{n+1} = \begin{cases} \left \lfloor \alpha x_n \right \rfloor & \textup{if} x_n \leqslant L \left \lfloor \frac{x_n}{\alpha} \right \rfloor & \textup{if} x_n > L \end{cases}. $$
Prove that
(i) $\left\{x_n\right\}$ is eventually periodic.
(ii) The eventual fundamental period of $\left\{x_n\right\}$ is an odd integer which doesn't depend on the choice of $x_1$ .
