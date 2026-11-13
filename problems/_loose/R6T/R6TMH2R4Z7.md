---
tag: R6TMH2R4Z7
kind: problem
type: answer
answer: '[0,\frac{\sqrt{3}}{3}]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98596
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The range of the function $y=\frac{\sqrt{1-x^{2}}}{2+x}$ is $ $ .
3. $\left[0, \frac{\sqrt{3}}{3}\right]$.

From the condition, we know $x \in[-1,1]$.
Let $x=\cos \alpha(\alpha \in[0, \pi])$. Then
$$
\begin{aligned}
y & =\frac{\sin \alpha}{2+\cos \alpha}(y \geqslant 0) \\
\Rightarrow & 2 y=\sin \alpha-y \cos \alpha \\
& =\sqrt{1+y^{2}} \sin (\alpha+\theta) \\
& \leqslant \sqrt{1+y^{2}}
\end{aligned}
$$
