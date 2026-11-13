---
tag: EG8FKH0SMV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269275
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:A^3\to A$ where $A$ is a nonempty set and $f$ satisfies:
(a) for all $x,y\in A$, $f(x,y,y)=x=f(y,y,x)$ and
(b) for all $x_1,x_2,x_3,y_1,y_2,y_3,z_1,z_2,z_3\in A$,
$$f(f(x_1,x_2,x_3),f(y_1,y_2,y_3),f(z_1,z_2,z_3))=f(f(x_1,y_1,z_1),f(x_2,y_2,z_2),f(x_3,y_3,z_3)).$$
Prove that for an arbitrary fixed $a\in A$, the operation $x+y=f(x,a,y)$ is an Abelian group addition.
