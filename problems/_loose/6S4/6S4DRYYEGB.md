---
tag: 6S4DRYYEGB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177147
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a fixed prime number greater than 3. A triangle will be called acceptable if the degree measure of each of its angles is of the form $\frac{180 m}{n}$ for some natural number $m$. Initially, there is one acceptable triangle on the table. It is allowed to take a triangle from the table and cut it into two acceptable triangles, neither of which is similar to any of those on the table. The two resulting triangles are also placed on the table. Prove that at the moment when the next cutting is impossible, every acceptable triangle is similar to one of the triangles on the table.
