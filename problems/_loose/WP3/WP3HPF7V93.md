---
tag: WP3HPF7V93
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3562697
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2327
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2025
    source: hf-ai-mo-aops
    label: 2025 239 Open Mathematical Olympiad
---
The numbers from $1$ to $2025$ are arranged in some order in the cells of the $1 \times 2025$ strip. Let's call a *flip* an operation that takes two arbitrary cells of a strip and swaps the numbers written in them, but only if the larger of these numbers is located to the left of the smaller one. A *flop* is a set of several flips that do not contain common cells that are executed simultaneously. (For example, a simultaneous flip between the 2nd and 8th cells and a flip between the 5th and 101st cells.) Prove that there exists a sequence of $66$ flops such that for any initial arrangement, applying this sequence of flops to it will result in the numbers being ordered from left to right in ascending order.
