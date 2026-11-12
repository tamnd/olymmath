---
tag: 9TARMX5GTK
kind: problem
type: answer
answer: (0,2017),(2017,0)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=12552
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
By the meaning of the problem, $x \geq 0, y \geq 0$.

Square both sides, we get: $x+y+2 \sqrt{x y}=2017$.

Consider the expression $(2017+x-y)^{2}$, we get

$$
(2017+x-y)^{2}=(x+y+2 \sqrt{x y}+x-y)^{2}=4 x(\sqrt{x}+\sqrt{y})^{2}=4 \cdot 2017 \cdot x .
$$

Since the expression $(2017+x-y)^{2}$ is a perfect square, the product $4 \cdot 2017 \cdot x$ is a perfect square.

Thus, $x=2017 \cdot k^{2}, k \in Z$.

Substitute the found value of $x$ into the original equation, we get

$$
\sqrt{2017} \cdot|k|+\sqrt{y}=\sqrt{2017}
$$

Notice that if $|k| \geq 2$, the equation has no solutions because the left side is greater than the right side.

If $k=0$, then $x=0, y=2017$.

If $|k|=1$, then $x=2017, y=0$.
