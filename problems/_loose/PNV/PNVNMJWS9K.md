---
tag: PNVNMJWS9K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h3073157
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=808
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204460
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2023
    source: hf-ai-mo-aops
    label: 2023 Irish Math Olympiad
---
The positive integers $a, b, c, d$ satisfy

(i) $a + b + c + d = 2023$ (ii) $2023 \text{ } | \text{ } ab - cd$ (iii) $2023 \text{ } | \text{ } a^2 + b^2 + c^2 + d^2.$ Assuming that each of the numbers $a, b, c, d$ is divisible by $7$ , prove that each of the numbers $a, b, c, d$ is divisible by $17$ .
