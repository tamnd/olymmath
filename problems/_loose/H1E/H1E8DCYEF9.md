---
tag: H1E8DCYEF9
kind: problem
type: answer
answer: B_2=-1orB_2=2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=19918
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $B_{2}=B_{4}$, then $B_{2}=B_{2}^{2}-2$, from which

$$
B_{2}^{2}-B_{2}-2=\left(B_{2}+1\right)\left(B_{2}-2\right)=0 .
$$

If $B_{2}=A^{2}-2=-1$ then $A= \pm 1$. We will show that the condition $A=x+1 / x=1$ is impossible. If $x>0$, then $x+1 / x \geq 2$. If $x<0$, then $x+1 / x<0$.

If $B_{2}=A^{2}-2=2$, then $A= \pm 2$. These values of $A$ correspond to $x= \pm 1$.
