---
tag: AX8T3GQW20
kind: problem
type: answer
answer: a_{180} > 19
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218964
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $(a_n)$ be constructed in the following way:
$$
a_1=1,\text{ }a_2=1,\text{ }a_{n+2}=a_{n+1}+\frac{1}{a_n},\text{ }n=1,2,\ldots.
$$
Prove that $a_{180}>19$.

*(Folklore)*
