---
tag: F7VXCC3Y5N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Iran Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3322985
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1813
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=352
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-tst/2024
    source: hf-ai-mo-aops
    label: 2024 Iran Team Selection Test
  - at: ir-mo
    source: hf-mathnet
    label: Iran 41th Iranian Mathematical Olympiad
---
Prove that for any natural numbers $a , b , c$ that $b>a>1$ and $gcd(c,ab)=1$ , there exist a natural number $n$ such that : $$ c | \binom{b^n}{a^n} $$ *Proposed by Navid Safaei*
