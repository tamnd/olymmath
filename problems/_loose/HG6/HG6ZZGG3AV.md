---
tag: HG6ZZGG3AV
kind: problem
type: answer
answer: (b)=(12;5),(8;6),(2;0),(-4;3),(5;12),(6;8),(0;2),(3;-4)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2203
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Express $y$ from the equation of the line $y-1=\frac{4-a x-b}{b}$ and substitute it into the equation of the circle:

$b^{2}(x-1)^{2}+(a x+b-4)^{2}-b^{2}=0 \Leftrightarrow x^{2}\left(a^{2}+b^{2}\right)+2 x\left(a(b-4)-b^{2}\right)+(b-4)^{2}=0$

The condition for the line to be tangent to the circle is $D=0 \rightarrow\left(a(b-4)-b^{2}\right)^{2}-\left(a^{2}+b^{2}\right)(b-4)^{2}=0$

After transformation, $4 a+4 b-a b-8=0 \rightarrow a=\frac{4 b-8}{b-4}=4+\frac{8}{b-4}$

For $a$ to be an integer, the number $b-4$ must be a divisor of the number 8, i.e., $b-4= \pm 1, \pm 2, \pm 4, \pm 8$.

| $b-4$ | 1 | -1 | 2 | -2 | 4 | -4 | 8 | -8 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| $a$ | 12 | -4 | 8 | 0 | 6 | 2 | 5 | 3 |
| $b$ | 5 | 3 | 6 | 2 | 8 | 0 | 12 | -4 |
