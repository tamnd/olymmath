---
tag: MA1AVNBE81
kind: problem
type: answer
answer: x\in(-\infty;-4]\cup[-2;-1]\cup[0;1]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10324
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's solve the inequality $ \frac{\sqrt{x^{2}+x}-\sqrt{4-2 x}}{2 x+5-2 \sqrt{x^{2}+5 x+6}} \leq 0$.

Domain of definition for the numerator and denominator: $x(x+1) \geq 0, 4-2 x \geq 0, x^{2}+5 x+6 \geq 0, \Rightarrow$ $x \in(-\infty ;-3] \cup[-2 ;-1] \cup[0 ; 2]$.

On the domain of definition, the original inequality is equivalent to the following

$\frac{x^{2}+x-(4-2 x)}{(x+3)-2 \sqrt{(x+3)(x+2)}+x+2} \leq 0 \Rightarrow \frac{(x+4)(x-1)}{(x+3)-2 \sqrt{(x+3)(x+2)}+x+2} \leq 0$.

If $x \geq-2$, then we arrive at the inequality $\frac{(x+4)(x-1)}{(\sqrt{x+3}-\sqrt{x+2})^{2}} \leq 0$, and $x \in[-2 ; 1]$.

Considering the domain of definition, $x \in[-2 ;-1] \cup[0 ; 1]$.

If $x \leq-3$, then we arrive at the inequality $\frac{(x+4)(x-1)}{-(\sqrt{-x-3}+\sqrt{-x-2})^{2}} \leq 0$, and

$x \in(-\infty ;-4]$, which is within the domain of definition. Finally, we have $x \in(-\infty ;-4] \cup[-2 ;-1] \cup[0 ; 1]$.
