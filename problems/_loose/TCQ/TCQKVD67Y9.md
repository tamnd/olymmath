---
tag: TCQKVD67Y9
kind: problem
type: answer
answer: -\frac{1}{630}x^{7}+\frac{1}{18}x^{5}-\frac{26}{45}x^{3}+\frac{32}{21}x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186212
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine a polynomial

$$
f(x)=a_{0}+a_{1} x+a_{2} x^{2}+\ldots+a_{n} x^{n} \left(a_{0}, a_{1}, \ldots, a_{n} \text { real } ; a_{n} \neq 0\right)
$$

that satisfies the conditions

$$
f(-4)=0, f(-3)=1, f(-2)=0, f(-1)=-1, f(0)=0, f(1)=1, f(2)=0, f(3)=-1, f(4)=0
$$

and has the lowest possible degree $n$.
