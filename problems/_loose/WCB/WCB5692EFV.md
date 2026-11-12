---
tag: WCB5692EFV
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5407
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
1 way to solve.

$$
\begin{aligned}
& \left(\operatorname{tg} 9^{\circ}-\operatorname{tg} 63^{\circ}\right)+\left(\operatorname{tg} 81^{\circ}-\operatorname{tg} 27^{\circ}\right)=-\frac{\sin 54^{\circ}}{\cos 9^{\circ} \cos 63^{\circ}}+\frac{\sin 54^{\circ}}{\cos 81^{\circ} \cos 27^{\circ}}= \\
& =\frac{\sin 54^{\circ} \cdot\left(\cos 9^{\circ} \cos 63^{\circ}-\sin 9^{\circ} \sin 63^{\circ}\right)}{\cos 9^{\circ} \cos 63^{\circ} \cos 81^{\circ} \cos 27^{\circ}}= \\
& =\frac{2 \sin 27^{\circ} \cos 27^{\circ} \cdot \cos 72^{\circ}}{\cos 9^{\circ} \sin 27^{\circ} \sin 9^{\circ} \cos 27^{\circ}}=\frac{4 \cos 72^{\circ}}{2 \cos 9^{\circ} \sin 9^{\circ}}=\frac{4 \sin 18^{\circ}}{\sin 18^{\circ}}=4
\end{aligned}
$$

2 way to solve.

$$
\left(\operatorname{tg} 9^{\circ}+\operatorname{tg} 81^{\circ}\right)-\left(\operatorname{tg} 63^{\circ}+\operatorname{tg} 27^{\circ}\right)=2\left(\frac{1}{\sin 18^{\circ}}-\frac{1}{\cos 36^{\circ}}\right)
$$

Using the equalities $\sin 18^{\circ}=(\sqrt{5}-1) / 4, \cos 36^{\circ}=(\sqrt{5}+1) / 4$, we get

$$
2\left(\frac{4}{\sqrt{5}-1}-\frac{4}{\sqrt{5}+1}\right)=4
$$

Note that

$$
\frac{200}{157} \pi=4 \cdot \frac{100}{314} \pi>4
$$
