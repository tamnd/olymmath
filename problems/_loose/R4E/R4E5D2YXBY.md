---
tag: R4E5D2YXBY
kind: problem
type: answer
answer: \sqrt{21}/2\approx2.29
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5383
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the value of $a$ for which the sum of all real roots of the equation

$$
\frac{f(a) \cdot x^{2}+1}{x^{2}+g(a)}=\sqrt{\frac{x g(a)-1}{f(a)-x}}
$$

is minimized, where $f(a)=a^{2}-\sqrt{21} a+26, g(a)=\frac{3}{2} a^{2}-\sqrt{21} a+27$. Provide the found value, rounding it to two decimal places if necessary.
