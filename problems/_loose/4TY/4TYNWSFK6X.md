---
tag: 4TYNWSFK6X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3537504
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2569
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2025
    source: hf-ai-mo-aops
    label: 2025 China Team Selection Test
---
Let $ n $ be an odd integer, $ m = \frac{n+1}{2} $. Consider $ 2m $ integers $ a_1, a_2, \ldots, a_m, b_1, b_2, \ldots, b_m $ such that for any $ 1 \leq i < j \leq m $, $ a_i \not\equiv a_j \pmod{n} $ and $ b_i \not\equiv b_j \pmod{n} $. Prove that the number of $ k \in \{0, 1, \ldots, n-1\} $ for which satisfy $ a_i + b_j \equiv k \pmod{n} $ for some $ i \neq j $, $i, j \in \left \{ 1,2,\cdots,m \right \} $ is greater than $ n - \sqrt{n} - \frac{1}{2} $.
