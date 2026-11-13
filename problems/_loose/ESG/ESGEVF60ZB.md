---
tag: ESGEVF60ZB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169020
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It can be shown that

$$
\lim _{x \rightarrow 0} \frac{a^{x}-1}{x}
$$

exists and is finite for all $a>0$. Using this fact, prove that for the function defined by the limit

$$
f(a)=\lim _{x \rightarrow 0} \frac{a^{x}-1}{x}
$$

the following holds for any $u>0, v>0$:

$$
f(u \cdot v)=f(u)+f(v)
$$
