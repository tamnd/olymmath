---
tag: TRJC4PHER2
kind: problem
type: answer
answer: \frac{w-v}{w-u} f(u) + \frac{v-u}{w-u} f(w) \leq f(v) + 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269294
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[0,1]\to[0,\infty)$ be an arbitrary function satisfying
$$\frac{f(x)+f(y)}2\le f\left(\frac{x+y}2\right)+1$$
for all pairs $x,y\in[0,1]$. Prove that for all $0\le u<v<w\le1$,
$$\frac{w-v}{w-u}f(u)+\frac{v-u}{w-u}f(w)\le f(v)+2.$$
