---
tag: BY34BJ8XTR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h3214750
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29213
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229192
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2024 Tournament of Towns
---
A table $2 \times 2024$ is filled with positive integers. Specifically, the first row is filled with numbers from the set $\{1, \ldots, 2023\}$ . It turned out that for any two columns the difference of numbers from the first row is divisible by the difference of numbers from the second row, while all numbers in the second row are pairwise different. Is it true for sure that the numbers in the first row are equal?

Ivan Kukharchuk
