---
tag: P7VJQ9AN7M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83249
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $O, A$ and $B$ be points in the plane. Show that

$$
\|\overrightarrow{O A}\|+\|\overrightarrow{O B}\| \leq\|\overrightarrow{O A}+\overrightarrow{O B}\|+\|\overrightarrow{O A}-\overrightarrow{O B}\| .
$$

 Sometimes, an exercise asks to prove an inequality on $a, b$ and $c$, the lengths of the sides of a triangle. It is then interesting to consider

$$
x=a+b-c, y=b+c-a, z=c+a-b
$$

The triangle inequality allows us to assert that $x, y$ and $z$ are positive (strictly if it is specified that the triangle is not flat), and we can retrieve $a, b$ and $c$ by:

$$
a=\frac{x+z}{2}, b=\frac{y+x}{2}, c=\frac{z+y}{2}
$$
