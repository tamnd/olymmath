---
tag: HAA8YJQTD5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112053
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A non-negative function of two points $d(x, y)$. If $d(x, y)=d(y, x), d(x, y)+d(y, z) \geqslant d(x, z)$, $d(x, x)=0$ (for any $x, y, z$), then $d$ is called a distance. The second property is known as the triangle inequality. Prove that the function
$$
d(x, y)=\frac{|x-y|}{\sqrt{1+x^{2}} \sqrt{1+y^{2}}}
$$

is a distance. (Note: The concept of distance can be defined for any set. Here it is set to $\mathbf{R}$).
