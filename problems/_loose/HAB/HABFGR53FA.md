---
tag: HABFGR53FA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167300
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have assembled a symmetrical trapezoid from two 3, 4, 5 unit length (right-angled) triangles and one rectangle with side lengths of 1 and 4.

It can be observed that the double area $2 t=8 \cdot 4=32$ sq. units, and if we add the product of the parallel sides to the square of the height; we also get $32-\mathrm{t}$. Therefore, for our trapezoid,

$$
m(a+c)=b^{2}+a c
$$

It can also be observed that $b^{2}=\frac{7^{2}+1^{2}}{2}$, meaning $b$ is equal to the quadratic mean of $a$ and $c$,

$$
b^{2}=\frac{a^{2}+c^{2}}{2}
$$

Is it a coincidence that these two relationships hold simultaneously?
