---
tag: V24RV3DCMY
kind: problem
type: answer
answer: (3;1;1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186221
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all triples $(a ; b ; c)$ of natural numbers such that the function

$$
f(x)=\frac{x^{2}+a x+b}{x^{2}+c x+b}
$$

satisfies the following conditions:

(1) The function $f$ is defined for all real $x$.

(2) It holds that $1<f(2)<f(1)<2$.

(3) The function $f$ has two distinct real roots.
