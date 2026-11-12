---
tag: D7KAKT08TG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Brazil National Olympiad
    url: https://artofproblemsolving.com/community/c6h77865
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm/1998
    source: hf-ai-mo-aops
    label: 1998 Brazil National Olympiad
---
Two players play a game as follows: there $n > 1$ rounds and $d \geq 1$ is fixed. In the first round A picks a positive integer $m_1$ , then B picks a positive integer $n_1 \not = m_1$ . In round $k$ (for $k = 2, \ldots , n$ ), A picks an integer $m_k$ such that $m_{k-1} < m_k \leq m_{k-1} + d$ . Then B picks an integer $n_k$ such that $n_{k-1} < n_k \leq n_{k-1} + d$ . A gets $\gcd(m_k,n_{k-1})$ points and B gets $\gcd(m_k,n_k)$ points. After $n$ rounds, A wins if he has at least as many points as B, otherwise he loses.

For each $(n, d)$ which player has a winning strategy?
