---
tag: 86VFNWT3AH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9542
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Professor Fortran wrote a program that takes a natural number, multiplies all its digits, and then either subtracts this product from the initial number or adds it to the initial number at random. Thus, from the number 239, the program can get either $239-2 \cdot 3 \cdot 9=239-54=185$ or $239+54=293$. The result is then displayed on the screen, and the same operations are performed with the resulting number. After some time, the next number also appears on the screen, and so on. Professor Fortran ran the program and entered the number 141. Prove that this number will never be displayed on the screen again.
