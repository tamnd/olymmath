---
tag: 4GYPH9C1XN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52958
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A cube of size $10 \times 10 \times 10$ is composed of 500 black and 500 white smaller cubes arranged in a checkerboard pattern (cubes that touch each other by a face have different colors). From this cube, 100 smaller cubes were removed such that in each of the 300 rows of size $1 \times 1 \times 10$, parallel to any edge of the cube, exactly one cube is missing. Prove that the number of black cubes removed is divisible by 4.
