---
tag: QDX59Y0AJ5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Iran Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3580181
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2704
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=392
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Iran Team Selection Test
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
A number $ n $ is called lucky if it has at least two distinct prime divisors and can be written in the form:
$$
n = p_1^{\alpha_1} + \cdots + p_k^{\alpha_k}
$$
where $ p_1, \dots, p_k $ are distinct prime numbers that divide $ n $. (Note: it is possible that $ n $ has other prime divisors not among $ p_1, \dots, p_k $.) Prove that for every prime number $ p $, there exists a lucky number $ n $ such that $ p \mid n $.

*Proposed by Navid Safaei*
