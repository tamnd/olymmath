---
tag: 147EJVYWY8
kind: problem
type: answer
answer: for\geqslant0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5692
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $x<0$ there are no solutions, since the function on the right is negative, while the one on the left is non-negative. For $x \geqslant 0$ we have $\arccos \left(\frac{1-x^{2}}{1+x^{2}}\right)=2 \operatorname{arctg} x$, therefore the original inequality is equivalent to

$$
(x-a)^{2} \leqslant 0
$$

From which $x=a$ and for $a \geqslant 0$ there is one solution $x=a$.
