---
tag: TEVNZ2EQQE
kind: problem
type: answer
answer: x=\frac{1}{2},\quadx=2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5678
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
By making the substitution $\log _{2} x=t(x>0, x \neq 1, x \neq 1 / 4, x \neq 1 / 9)$, we arrive at the equation $t(t+2)\left(t+\log _{2} 9\right)=1-\log _{2} 9$. A root $t=-1$ can be guessed for it, after which it can be reduced to the form

$$
(t+1)\left(t^{2}+\left(\log _{2} 9+1\right) t+\left(\log _{2} 9-1\right)\right)=0
$$

The discriminant of the second parenthesis is $\log _{2}^{2} 9-2 \log _{2} 9+5$ - this is a positive number.
