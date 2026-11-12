---
tag: ZR8T6CEMFS
kind: problem
type: answer
answer: \frac{\sqrt{2}}{2^{45}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13024
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a=\sin 1^{\circ} \cdot \sin 2^{\circ} \cdot \sin 3^{\circ} \cdot \ldots \cdot \sin 89^{\circ}$ and $b=\sin 1^{\circ} \cdot \sin 3^{\circ} \cdot \ldots \cdot \sin 87^{\circ} \cdot \sin 89^{\circ}$. Then $\frac{a}{b}=\sin 2^{\circ} \cdot \sin 4^{\circ} \cdot \sin 6^{\circ} \cdot \ldots \cdot \sin 88^{\circ} \cdot$

Applying the double-angle formula, we get:

$$
\frac{a}{b}=2^{44} \cdot \sin 1^{\circ} \cdot \sin 2^{\circ} \cdot \sin 3^{\circ} \cdot \ldots \cdot \sin 44^{\circ} \cdot \cos 1^{\circ} \cdot \cos 2^{\circ} \cdot \cos 3^{\circ} \cdot \ldots \cdot \cos 44^{\circ}
$$

From which we find:

$$
\begin{aligned}
& b=\sin 1^{\circ} \cdot \sin 3^{\circ} \cdot \ldots \cdot \sin 87^{\circ} \cdot \sin 89^{\circ}= \\
& =\frac{a}{2^{44} \cdot \sin 1^{\circ} \cdot \cos 1^{\circ} \cdot \sin 2^{\circ} \cdot \cos 2^{\circ} \ldots \cdot \sin 44^{\circ} \cdot \cos 44^{\circ}}= \\
& =\frac{\sin 1^{\circ} \cdot \sin 2^{\circ} \cdot \ldots \cdot \sin 89^{\circ}}{2^{44} \cdot \sin 1^{\circ} \cdot \cos 1^{\circ} \cdot \sin 2^{\circ} \cdot \cos 2^{\circ} \cdot \ldots \cdot \sin 44^{\circ} \cdot \cos 44^{\circ}}= \\
& =\frac{\sin 45^{\circ} \cdot \sin 46^{\circ} \cdot \ldots \cdot \sin 89^{\circ}}{2^{44} \cdot \cos 1^{\circ} \cdot \cos 2^{\circ} \cdot \ldots \cdot \cos 44^{\circ}}= \\
& =\frac{\sin 45^{\circ} \cdot \sin 46^{\circ} \cdot \ldots \cdot \sin 89^{\circ}}{2^{44} \cdot \sin 89^{\circ} \cdot \sin 88^{\circ} \cdot \ldots \cdot \sin 46^{\circ}}=\frac{\frac{\sqrt{2}}{2}}{2^{44}}=\frac{\sqrt{2}}{2^{45}}
\end{aligned}
$$
