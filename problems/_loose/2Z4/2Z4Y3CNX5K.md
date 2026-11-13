---
tag: 2Z4Y3CNX5K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125721
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove: For the function $f(x)$, if there exist two sets of real numbers $a_{1}, b_{1}: a_{2}, b_{2}\left(a_{1}+b_{1} \neq a_{2}+b_{2}\right)$, such that for any $x$ in the domain of the function, we have
$$
f\left(a_{1}+x\right)=-f\left(b_{1}-x\right), f\left(a_{2}+x\right)=f\left(b_{2}-x\right),
$$

then $f(x)$ is a periodic function, and $2\left|\left(a_{2}+b_{2}\right)-\left(a_{1}+b_{1}\right)\right|$ is one of its positive periods.
