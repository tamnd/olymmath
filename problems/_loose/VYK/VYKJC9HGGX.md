---
tag: VYKJC9HGGX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h254102
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35762
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
Given $ n \geq 3$ , $ n$ is a integer. Prove that:
$$ (2^n - 2) \cdot \sqrt{2i-1} \geq \left( \sum_{j=0}^{i-1}C_n^j + C_{n-1}^{i-1} \right) \cdot \sqrt{n}$$
where if $ n$ is even, then $ 1 \leq i \leq \frac{n}{2}$ ; if $ n$ is odd, then $ 1 \leq i \leq \frac{n-1}{2}$ .
