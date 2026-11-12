---
tag: ST57MK8NSE
kind: problem
type: answer
answer: "-673"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=19962
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A rule is given by which each pair of integers $X$ and $Y$ is assigned a number $X \nabla Y$. (The symbol """ means applying the rule to the numbers $X$ and $Y$.) It is known that for any integers $X, Y$ the following properties hold:

1) $X \nabla 0=X$
2) $X \nabla(Y-1)=(X \nabla Y)-2$
3) $X \nabla(Y+1)=(X \nabla Y)+2$.

Find the formula that describes the given rule, and solve the equation

$$
X \nabla X=-2019
$$
