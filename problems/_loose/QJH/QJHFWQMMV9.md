---
tag: QJHFWQMMV9
kind: problem
type: answer
answer: \alpha = -\beta
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219514
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the following subsets of the plane:$$C_1=\Big\{(x,y)~:~x>0~,~y=\frac1x\Big\} $$ and $$C_2=\Big\{(x,y)~:~x<0~,~y=-1+\frac1x\Big\}$$ Given any two points $P=(x,y)$ and $Q=(u,v)$ of the plane, their distance $d(P,Q)$ is defined by $$d(P,Q)=\sqrt{(x-u)^2+(y-v)^2}$$ Show that there exists a unique choice of points $P_0\in C_1$ and $Q_0\in C_2$ such that $$d(P_0,Q_0)\leqslant d(P,Q) \forall ~P\in C_1~\text{and}~Q\in C_2.$$
