---
tag: SC3CAF0CHX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Iran Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3580183
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2705
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Iran Team Selection Test
---
There are $ n $ cups labeled $ 1, 2, \dots, n $, where the $ i $-th cup has capacity $ i $ liters. In total, there are $ n $ liters of water distributed among these cups such that each cup contains an integer amount of water. In each step, we may transfer water from one cup to another. The process continues until either the source cup becomes empty or the destination cup becomes full. $a)$ Prove that from any configuration where each cup contains an integer amount of water, it is possible to reach a configuration in which each cup contains exactly 1 liter of water in at most $ \frac{4n}{3} $ steps.
$b)$ Prove that in at most $ \frac{5n}{3} $ steps, one can go from any configuration with integer water amounts to any other configuration with the same property.

*Proposed by Ehsan Heidari*
