---
tag: REFCK188A3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 South East Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3620184
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36698
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-smo/2025
    source: hf-ai-mo-aops
    label: 2025 South East Mathematical Olympiad
---
Given a positive real number $ c $, consider a sequence of positive integers $ \{a_n\} $ with $ a_1 \equiv 3 \pmod{4} $ and $ a_{n+1} = a_n + 4 \left\lfloor c \cdot \sqrt[3]{a_n} \right\rfloor $ for $ n \geq 1 $. Prove that there exist a real number $ r $ and $2025$ distinct positive integers $ k $ such that $ \left\lfloor 10^{2^kr} \right\rfloor $ is a term of $ \{a_n\} $ for each such $ k $. (Here $ \lfloor x \rfloor $ is the greatest integer $ \leq x $.)
