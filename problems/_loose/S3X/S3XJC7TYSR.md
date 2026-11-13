---
tag: S3XJC7TYSR
kind: problem
type: answer
answer: 2+5^{\frac{1}{5}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108665
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the function
$$
f(x, y, z)=\sqrt[5]{x+1}+\sqrt[5]{y+1}+\sqrt[5]{z+1} \text {. }
$$

Find the largest real number $\lambda$, such that for any positive numbers $x, y, z$ satisfying $x+y+z=4$, we have $f(x, y, z)>\lambda$.
