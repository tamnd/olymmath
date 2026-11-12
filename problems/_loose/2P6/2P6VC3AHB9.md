---
tag: 2P6VC3AHB9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h254109
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35765
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2002
    source: hf-ai-mo-aops
    label: 2002 China Team Selection Test
---
Let $P_n(x)=a_0 + a_1x + \cdots + a_nx^n$ , with $n \geq 2$ , be a real-coefficient polynomial. Prove that if there exists $a > 0$ such that
\begin{align*}
P_n(x) = (x + a)^2 \left( \sum_{i=0}^{n-2} b_i x^i \right),
\end{align*}
where $b_i$ are positive real numbers, then there exists some $i$ , with $1 \leq i \leq n-1$ , such that $$a_i^2 - 4a_{i-1}a_{i+1} \leq 0.$$
