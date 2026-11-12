---
tag: KN5J8AJTWP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2022
    url: https://artofproblemsolving.com/community/c6h3036680
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57247
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2022
    source: hf-ai-mo-aops
    label: Russian TST 2022
---
Write the natural numbers from left to right in ascending order. Every minute, we perform an operation. After $m$ minutes, we divide the entire available series into consecutive blocks of $m$ numbers. We leave the first block unchanged and in each of the other blocks we move all the numbers except the first one one place to the left, and move the first one to the end of the block. Prove that throughout the process, each natural number will only move a finite number of times.
