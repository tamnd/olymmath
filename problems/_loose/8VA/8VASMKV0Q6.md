---
tag: 8VASMKV0Q6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1814882
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18151
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2019
    source: hf-ai-mo-aops
    label: 2019 Online Math Open Problems
---
Let $n$ be a positive integer and let $P(x)$ be a monic polynomial of degree $n$ with real coefficients. Also let $Q(x)=(x+1)^2(x+2)^2\dots (x+n+1)^2$ . Consider the minimum possible value $m_n$ of $ \sum_{i=1}^{n+1} \dfrac{i^2P(i^2)^2}{Q(i)}$ . Then there exist positive constants $a,b,c$ such that, as $n$ approaches infinity, the ratio between $m_n$ and $a^{2n} n^{2n+b} c$ approaches $1$ . Compute $\lfloor 2019 abc^2\rfloor$ .

*Proposed by Vincent Huang*
