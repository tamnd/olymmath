---
tag: 49DN1B2RZR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=24721
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if a fractional-linear function has three fixed points, then it leaves all points unchanged.

When studying fractional-linear functions, the correspondence they establish between numbers of $p$-arithmetic, i.e., their table or scheme, is essential to us, while their algebraic notation is not. The same fractional-linear function can be expressed by different formulas: by multiplying the numerator and the denominator of one such expression by a certain number, we can always obtain another representation of the same function that does not coincide with the first. For example, the expressions

$$
\frac{2 x+1}{7 x+5} \text { and } \frac{7 x-2}{8 x+1}
$$

are representations of the same 11-arithmetic fractional-linear function (this can be easily verified by writing the corresponding table).

Let two fractional-linear functions be given:

$$
f(x)=\frac{a x+b}{c x+d} \text { and } g(x)=\frac{a^{\prime} x+b^{\prime}}{c^{\prime} x+d^{\prime}}
$$

A new fractional-linear function $f(g(x))$ is formed by substituting the function $g(x)$ for $x$ in $f(x)$:

$$
f(g(x))=\frac{a \frac{a^{\prime} x+b^{\prime}}{c^{\prime} x+d^{\prime}}+b}{c \frac{a^{\prime} x+b^{\prime}}{c^{\prime} x+d^{\prime}}+d}=\frac{\left(a a^{\prime}+b c^{\prime}\right) x+a b^{\prime}+b d^{\prime}}{\left(c a^{\prime}+d c^{\prime}\right) x+c b^{\prime}+d d^{\prime}}
$$
