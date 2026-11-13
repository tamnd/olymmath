---
tag: 8R4RJ1M2TJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248633
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sphere of unit radius with the big circle (i.e of unit radius) that will be called "equator". We shall use the words "pole", "parallel","meridian" as self-explanatory.
a) Let $g(x)$, where $x$ is a point on the sphere, be the distance from this point to the equator plane.
Prove that $g(x)$ has the property if $x_1, x_2, x_3$ are the ends of the pairwise orthogonal radiuses, then
$g(x_1)^2 + g(x_2)2 + g(x_3)^2 = 1$. (*)

Let function $f(x)$ be an arbitrary nonnegative function on a sphere that satisfies (*) property.
b) Let $x_1$ and $x_2$ points be on the same meridian between the north pole and equator, and $x_1$ is closer to the pole than $x_2$. Prove that $f(x_1) > f(x_2)$.
c) Let $y_1$ be closer to the pole than $y_2$. Prove that $f(y_1) > f(y_2)$.
d) Let $z_1$ and $z_2$ be on the same parallel. Prove that $f(z_1) = f(z_2)$.
e) Prove that for all $x , f(x) = g(x)$.
